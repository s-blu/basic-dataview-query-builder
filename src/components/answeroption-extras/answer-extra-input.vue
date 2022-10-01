<script lang="ts">
export default {
  props: {
    input: Object,
  },
  data() {
    return {
      inputval: this.input.preset ?? "",
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
  <div class="answer-extra-input field">
    <div class="label">
      {{ input.label }}
    </div>
    <div class="control">
      <input class="input" v-model.trim="inputval" :placeholder="input.varname"/>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
