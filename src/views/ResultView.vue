<script lang="ts">
import { useQuestionsStore } from "@/stores/questions.store";
import { mapActions } from "pinia";
import DqbDataviewQuery from "../components/dqb-dataviewQuery.vue";

export default {
  components: {
    DqbDataviewQuery,
  },
  methods: {
    ...mapActions(useQuestionsStore, ["resetAppState"]),
    startNew() {
      this.resetAppState();
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <main class="result-view">
    <div class="result">
      <div class="result-msg">
        <div class="header">Finished!</div>
        <div class="msg">
          Congratulations to your new dataview query! Your next steps:
          <ol class="next-steps">
            <li>
              Use the copy button to the right to copy the query below.
            </li>
            <li>Paste it into a note of your choice in your vault.</li>
            <li>
              Replace the placeholders in curly brackets with your individual
              tags, folders, meta data names, if any are left.
            </li>
            <li>
              Click outside of the query block (in Live Preview) or switch to
              Read Mode to see the result!
            </li>
          </ol>
        </div>
      </div>

      <hr />
      <div class="queryheading">
        Your dataview Query! 🎉 Copy this into your vault ⬇ and follow the steps
        above ⬆
      </div>

      <DqbDataviewQuery class="dataviewquery"></DqbDataviewQuery>

      <hr />

      <div class="help">
        <div class="header">Need help?</div>
        <div class="msg">
          Something doesn't work out as expected? Take a look at the
          <a href="https://blacksmithgu.github.io/obsidian-dataview/"
            >official documentation</a
          >, see if the
          <a href="https://s-blu.github.io/obsidian_dataview_example_vault/"
            >example vault</a
          >
          can help or head over to the
          <a href="https://obsidian.md/community">Obsidian community</a> for
          support.
        </div>
      </div>
    </div>
    <button @click="startNew()" class="button is-success start-btn">
      Start a new questionnaire!
    </button>
  </main>
</template>

<style scoped lang="scss">
@use "src/assets/mixins";

main {
  max-width: 960px;
}

.result-msg,
.help {
  @include mixins.box;
  font-size: 15pt;

  .header {
    @include mixins.heading;
  }

  .next-steps {
    padding: 1em;
  }
}

.queryheading {
  @include mixins.heading;
  margin-bottom: 0.5em;
}

.start-btn {
  display: block;
  margin: auto;
  margin-top: 2em;
}
</style>
