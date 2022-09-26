<script lang="ts">
export default {
  props: {
    answer: String,
  },
};
</script>

<template>
  <div class="answer button">{{ answer.label }}</div>
</template>

<style lang="scss">
.answer {
  margin: 4px;
  min-width: 200px;
}
</style>
