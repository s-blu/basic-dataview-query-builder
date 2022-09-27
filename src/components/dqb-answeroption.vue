<script lang="ts">
export default {
  props: {
    answer: Object
  },
  methods: {
    selectAnswer() {
      this.$emit("selected");
    },
  },
};
</script>

<template>
  <div class="answer button" @click="selectAnswer">{{ answer.label }}</div>
</template>

<style lang="scss">
.answer {
  margin: 4px;
  min-width: 200px;
}
</style>
