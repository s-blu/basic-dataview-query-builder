# Basic Dataview Query builder

## 🧱 [Click here to access the Basic Query Builder!](https://s-blu.github.io/basic-dataview-query-builder/) 🧱 

## What is this?

The "Basic Dataview Query Builder" is a webpage that allows you the creation of basic dataview queries. [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) is a popular community plugin for the Personal Knowledge Management software [Obsidian.md](https://obsidian.md/), both brilliant and highly flexible applications that can be a bit difficult to understand in the beginning.

To make your start into dataview a tad more easier, the Basic Dataview Query Builder allows you to click together your first queries that'll help you understand the syntax of the plugin and guide you through the different pieces of informations needed to build a useable query.

We hope you enjoy!

If you find a bug, have a question or would like to see another feature, feel free to open a issue at the [github repository](https://github.com/s-blu/basic-dataview-query-builder).

## Development/Contribution

**If you want to use the basic dataview query builder, click the link at the very top of this information!** The following information is for developing and customizing the basic dataview query.

This page is based on a Vue 3 application built with Vite, styled with [Bulma.io](https://bulma.io). 

### Questions JSON

The questions of the Basic Query Builder are stored in a .json for easy maintainability and exchangebility. That makes it theoretically possible to build multiple query builders, i.e. some that focus on a specific part of dataview. To be recognized by the query builder, the JSON file needs to follow a certain structure.

The JSON contains an **Array** with **Question objects**.

#### Object structures 

**Question**
```
question: string // The question itself
subtitle: string // Subtitle or Category of the question, shown in the navigation (desktop only)
condition: ConditionString // (optional) If present, determines based on the available queryParts if the question should be asked or not
answers: AnswerOption[] // array of all available answers
```

**Condition String**

A condition string is a normal string that needs to follow a convention. It checks if the given words are part of the query (case sensitive) and helps decide if the conditioned question is relevant to ask or not. The condition is always executed on the raw dataview, without variable (user input) replacement. 

`WORD` Mandatory Word. Needs to be present.
`-WORD` Forbidden word. Cannot be present.
`~WORD` OR. Needs to be combined with Mandatory or forbidden words to create OR concantinations

_Examples_
`TABLE` Question will be shown if TABLE is present in current query (if it is a TABLE query)
`WHERE~FROM` Question will be shown if either WHERE or FROM or both are present
`TABLE -GROUP` Question will be shown if TABLE is present and GROUP is not.
`TABLE FLATTEN -GROUP~LIMIT` Question will be shown if TABLE and FLATTEN is available, but GROUP or LIMIT are not.
`LIST~TABLE~TASK FLATTEN -GROUP` Question will be shown if FLATTEN and LIST or TABLE or TASK are available and GROUP is not.

**Answeroptions**

```
label: string // the text of the answer
dataview: string // dataview the answer produces. Put variables that should be replaceable in {{}}
readmore: string // (optional) link to the official dataview documentation that gives more info about the resulting dataview
extras: AnswerOptionExtras[] // (optional) additional UI elements associated with this answer
```

**AnswerOptionExtras: Input**

Renders a text input field that can be used to replace placeholders in the answeroptions dataview.

```
type: "input" // type of extra. 
label: string // label of the input field
variabletype: string // (optional) type of variable to perform specific operations on input. Currently available: metadata
varname: string // variable name used in the dataview string of the answer that should be replaced with this input value
```

**AnswerOptionExtras: Hint**

Displays a message box/notification with some custom text that can give hints or additional context.

```
type: "hint" // type of extra. 
title: string // (optional) Title of the message box
message: string // message of the message box
```


### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


### Project Setup

```sh
npm install
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

#### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

#### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
