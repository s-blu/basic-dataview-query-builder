<script lang="ts">
export default {
  props: {
    disabled: Boolean,
    to: String,
    disabledBecause: String,
  },
  methods: {
    clicked() {
      this.$emit("clicked");
    },
  },
};
</script>

<template>
  <container>
    <router-link :to="to || ''" class="button" v-if="!disabled && to">
      <slot></slot>
    </router-link>
    <button v-else-if="!disabled" class="button" @click="clicked">
      <slot></slot>
    </button>
    <button v-else class="button" disabled="true" :title="disabledBecause">
      <slot></slot>
    </button>
  </container>
</template>

<style scoped lang="scss"></style>
