<script lang="ts">
export default {
  props: {
    answer: String,
  },
};
</script>

<template>
  <div class="answer">{{ answer.label }}</div>
</template>
