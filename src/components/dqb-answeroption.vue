<script lang="ts">
export default {
  props: {
    answer: Object,
    index: Number,
    isSelected: Boolean,
    isMultiselect: Boolean,
  },
  computed: {
    readmorelabel() {
      if (this.answer?.readmorelabel) {
        return this.answer?.readmorelabel;
      } else {
        const dataviewQuery = this.answer?.dataview?.split(" ");
        if (!dataviewQuery[0]?.startsWith("{")) {
          return `Learn more about ${dataviewQuery[0]}`
        }
        return `Visit Documentation` 
      }
    }
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
      :aria-label="readmorelabel"
      :title="readmorelabel"
      :href="answer.readmore"
      target="_blank"
    >
      <span class="icon">
        <i class="fa-regular fa-circle-question"></i>
      </span>
    </a>
  </div>
</template>

<style scoped lang="scss">
.answer-select {
  border: 2px solid var(--color-text-hint);
  border-radius: 50%;
  cursor: pointer;
  min-width: 24px;

  &.multi {
    border-radius: 2px;
  }

  &.icon {
    color: var(--color-text-hint);
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
  padding: 0.5em;
  padding-right: 0;
  cursor: pointer;
}
</style>
