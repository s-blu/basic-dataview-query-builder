<script lang="ts">
export default {
  props: {
    input: Object,
    variablemap: Object,
  },
  data() {
    return {
      inputval: this.variablemap
        ? this.variablemap[this.input.varname] ?? ""
        : "",
    };
  },
  methods: {
    inputChange() {
      this.$emit("selected", this.index);
    },
  },
  watch: {
    inputval(newVal, oldVal) {
      // TODO: debounce event emitting with lodash or something
      console.log("bounce");
      this.$emit("updateExtra", this.input.varname, newVal);
    },
  },
};
</script>

<template>
  <div class="field is-horizontal">
    <div class="field-label">
      <label class="label">{{ input.label }}</label>
    </div>
    <div class="field-body">
      <div class="field">
        <p class="control">
          <input
            class="input"
            v-model.trim="inputval"
            :placeholder="input.varname"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
