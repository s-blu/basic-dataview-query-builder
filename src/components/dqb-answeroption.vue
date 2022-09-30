<script lang="ts">
export default {
  props: {
    answer: Object,
    index: Number,
    isSelected: Boolean,
    isMultiselect: Boolean,
  },
  methods: {
    selectAnswer() {
      this.$emit("selected", this.index);
    },
  },
};
</script>

<template>
  <div class="answer">
    <span
      @click="selectAnswer"
      class="icon answer-select"
      :class="{ multi: isMultiselect }"
    >
      <i v-if="isSelected" class="fa-solid fa-check"></i>
    </span>
    <span @click="selectAnswer" class="answerlabel">{{ answer.label }}</span>
    <a
      v-if="answer.readmore"
      class="button is-ghost readmore-btn"
      title="Visit documentation"
      :href="answer.readmore"
      target="_blank"
    >
      <span class="icon">
        <i class="fa-regular fa-circle-question"></i>
      </span>
    </a>
  </div>
</template>

<style lang="scss">
.answer-select {
  border: 2px solid var(--color-text-hint);
  border-radius: 50%;

  &.multi {
    border-radius: 2px;
  }
}

.answer {
  display: flex;
  align-items: center;
  min-height: 2.5em;
  border-radius: 3px;
  padding: 4px;
}

.answer:hover {
  background-color: var(--color-boxes);
}

.answerlabel {
  padding-left: 0.5em;
}

.readmore-btn.button.is-ghost {
  color: var(--color-text-hint);

  &:hover {
    text-decoration: none;
    color: var(--color-text-hint-hover);
  }
}
</style>
