<script lang="ts"></script>

<template>
  <main>
    <div class="welcomemsg">
      <div class="header">Welcome!</div>
      <div class="msg">
        Welcome to the Basic Dataview Query Builder! <br />
        This page will guide you through some multiple choice questions to put
        together a basic dataview query for your use case - either to use
        directly as-is in your vault or as a starting point to refine it further
        to build a more advanced query.
        <br />
        Click the button to start!
      </div>
    </div>
    <router-link to="/question/1" class="button is-success is-large start-btn"
      >START!</router-link
    >
    <hr />
    <div class="wotisthis">
      <div class="header">What is this page? What's going on?!</div>
      <div class="msg">
        <a href="https://blacksmithgu.github.io/obsidian-dataview/">Dataview</a>
        is a popular community plugin for the Personal Knowledge Management
        software <a href="https://obsidian.md">Obsidian.md</a>, both brilliant
        and highly flexible applications that can be a bit difficult to
        understand in the beginning. <br />
        To make your start into dataview a tad more easier, the Basic Dataview
        Query Builder (this very webpage) allows you to click together your
        first queries that'll help you understand the syntax of the plugin and
        guide you through the different pieces of informations needed to build a
        useable query. <br />
        <br />

        Want to learn more about dataview? Visit the
        <a href="https://blacksmithgu.github.io/obsidian-dataview/"
          >official documentation.</a
        ><br />

        If you find a bug, have a question or would like to see another feature
        for the Basic Dataview Query Builder, feel free to open a issue at the
        <a href="https://github.com/s-blu/basic-dataview-query-builder"
          >github repository</a
        >.
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "src/assets/mixins.scss";

main {
  max-width: 960px;
}
.header {
  @include heading;
}

.welcomemsg {
  @include box;
  font-size: 15pt;
}

.start-btn {
  display: block;
  margin: auto;
  margin-top: 2em;
}

.wotisthis {
  margin-top: 2em;
  @include box;
}
</style>
