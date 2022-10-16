<script lang="ts">
export default {
  props: {
    disabled: Boolean,
    to: String,
    disabledBecause: String,
  },
};
</script>

<template>
  <container>
    <router-link :to="to || ''" class="button" v-if="!disabled">
      <slot></slot>
    </router-link>
    <button v-else class="button" disabled="true" :title="disabledBecause">
      <slot></slot>
    </button>
  </container>
</template>

<style scoped lang="scss"></style>
