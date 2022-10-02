<script lang="ts">
export default {
  props: {
    input: Object,
  },
};
</script>

<template>
  <div class="answer-extra-hint message">
    <div class="message-header" v-if="input.title">
      <span>{{ input.title }}</span>
    </div>
    <div class="message-body">
      {{ input.message }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
