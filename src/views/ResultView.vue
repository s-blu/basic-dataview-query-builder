<script lang="ts">
import DqbDataviewQuery from "../components/dqb-dataviewQuery.vue";

export default {
  components: {
    DqbDataviewQuery,
  },
};
</script>

<template>
  <main>
    <div class="result">
      <div class="result-msg">
        <div class="header">Finished!</div>
        <div class="msg">
          Thanks for taking the questionnaire! Below is your query! Your next
          steps:
          <ol class="next-steps">
            <li>
              Copy the query below - make sure to copy the whole block (with the
              backticks)
            </li>
            <li>Paste it into a note of your choice in your vault</li>
            <li>
              Replace the placeholders in curly brackets with your individual
              tags, folders, meta data names
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
          <a href="https://obsidian.md/community">Obsidian community</a> for support.
        </div>
      </div>
    </div>
    <router-link to="/" class="button is-success start-btn"
      >Start a new questionnaire!</router-link
    >
  </main>
</template>

<style scoped lang="scss">
@import "src/assets/mixins.scss";

main {
  max-width: 960px;
}

.result-msg,
.help {
  @include box;
  font-size: 15pt;

  .header {
    @include heading;
  }

  .next-steps {
    padding: 1em;
  }
}

.queryheading {
  @include heading;
  margin-bottom: 0.5em;
}

.start-btn {
  display: block;
  margin: auto;
  margin-top: 2em;
}
</style>
