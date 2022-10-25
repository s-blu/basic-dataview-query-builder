import { describe, expect, it } from "vitest";
import {
  doesFulfillCondition,
  parseConditionString,
} from "./conditionString.utility";

describe("ConditionStrings", () => {
  describe("parseConditionString", () => {
    it("should return empty object on empty or invalid input", () => {
      expect(parseConditionString("")).toEqual({
        mandatory: [],
        forbidden: [],
      });

      expect(parseConditionString()).toEqual({
        mandatory: [],
        forbidden: [],
      });
    });
    it("should parse one word strings correctly", () => {
      expect(parseConditionString("FLATTEN")).toEqual({
        mandatory: ["FLATTEN"],
        forbidden: [],
      });

      expect(parseConditionString("-FLATTEN")).toEqual({
        mandatory: [],
        forbidden: ["FLATTEN"],
      });
    });

    it("should parse two word strings correctly", () => {
      expect(parseConditionString("FLATTEN GROUP")).toEqual({
        mandatory: ["FLATTEN", "GROUP"],
        forbidden: [],
      });

      expect(parseConditionString("-WHERE -FROM")).toEqual({
        mandatory: [],
        forbidden: ["WHERE", "FROM"],
      });

      expect(parseConditionString("WHERE -FROM")).toEqual({
        mandatory: ["WHERE"],
        forbidden: ["FROM"],
      });

      expect(parseConditionString("-TABLE SORT")).toEqual({
        mandatory: ["SORT"],
        forbidden: ["TABLE"],
      });
    });

    it("should parse strings with OR bindings correctly", () => {
      expect(parseConditionString("WHERE~FROM")).toEqual({
        mandatory: [["WHERE", "FROM"]],
        forbidden: [],
      });

      expect(parseConditionString("WHERE~FROM TABLE~LIST")).toEqual({
        mandatory: [
          ["WHERE", "FROM"],
          ["TABLE", "LIST"],
        ],
        forbidden: [],
      });

      expect(parseConditionString("WHERE~FROM -TABLE~LIST")).toEqual({
        mandatory: [["WHERE", "FROM"]],
        forbidden: [["TABLE", "LIST"]],
      });
    });

    it("should parse complex queries correctly", () => {
      expect(
        parseConditionString("TABLE~LIST~CALENDAR -FROM -GROUP FLATTEN")
      ).toEqual({
        mandatory: [["TABLE", "LIST", "CALENDAR"], "FLATTEN"],
        forbidden: ["FROM", "GROUP"],
      });

      expect(
        parseConditionString("A B C D -E -F~G~H J~K~L M N -O P -Q~R~S~T")
      ).toEqual({
        mandatory: ["A", "B", "C", "D", ["J", "K", "L"], "M", "N", "P"],
        forbidden: ["E", ["F", "G", "H"], "O", ["Q", "R", "S", "T"]],
      });
    });
  });

  describe("doesFulfillCondition", () => {
    it("should check simple queries and conditions correctly", () => {
      const query = ["LIST", "FROM {{folder}}"];

      expect(doesFulfillCondition(query, "LIST")).toBeTruthy();
      expect(doesFulfillCondition(query, "TABLE")).toBeFalsy();

      expect(doesFulfillCondition(query, "LIST FROM")).toBeTruthy();
      expect(doesFulfillCondition(query, "LIST -FLATTEN")).toBeTruthy();

      expect(doesFulfillCondition(query, "LIST -FROM")).toBeFalsy();
      expect(doesFulfillCondition(query, "LIST FLATTEN")).toBeFalsy();
    });

    it("should check simple queries and conditions with OR correctly", () => {
      const query = ["LIST", "FROM {{folder}}"];

      expect(doesFulfillCondition(query, "WHERE~FROM")).toBeTruthy();
      expect(doesFulfillCondition(query, "TABLE~TASK~LIST")).toBeTruthy();
      expect(doesFulfillCondition(query, "TABLE~LIST~CALENDAR")).toBeTruthy();

      expect(doesFulfillCondition(query, "WHERE~FLATTEN")).toBeFalsy();
      expect(doesFulfillCondition(query, "TABLE~CALENDAR")).toBeFalsy();

      expect(doesFulfillCondition(query, "LIST FROM~WHERE")).toBeTruthy();
      expect(
        doesFulfillCondition(query, "LIST FROM~WHERE~FLATTEN")
      ).toBeTruthy();
      expect(
        doesFulfillCondition(query, "FLATTEN~GROUP~LIST FROM")
      ).toBeTruthy();

      expect(doesFulfillCondition(query, "LIST FLATTEN~GROUP")).toBeFalsy();
      expect(doesFulfillCondition(query, "FLATTEN~GROUP FROM")).toBeFalsy();
    });

    it("should check complex queries and conditions correctly", () => {
      const query = [
        "LIST",
        "FROM {{folder}}",
        "WHERE contains({{field}}, {{value}})",
        "FLATTEN file.tasks AS tasks",
        'GROUP BY dateformat(file.ctime, "yyyy-MM") AS Created',
        "LIMIT {{limitCount}}",
      ];

      expect(doesFulfillCondition(query, "LIST -TABLE WHERE")).toBeTruthy();
      expect(doesFulfillCondition(query, "LIST -TABLE -SORT")).toBeTruthy();
      expect(doesFulfillCondition(query, "LIST -TABLE~CALENDAR")).toBeTruthy();
      expect(
        doesFulfillCondition(query, "LIST FROM WHERE FLATTEN GROUP LIMIT")
      ).toBeTruthy();
      expect(
        doesFulfillCondition(
          query,
          "LIST~TABLE WHERE~FROM -SORT LIMIT contains~substring FLATTEN"
        )
      ).toBeTruthy();

      expect(
        doesFulfillCondition(
          query,
          "LIST~TABLE WHERE~FROM SORT LIMIT contains~substring FLATTEN"
        )
      ).toBeFalsy();
      expect(doesFulfillCondition(query, "LIST TABLE -SORT")).toBeFalsy();
    });
  });
});
