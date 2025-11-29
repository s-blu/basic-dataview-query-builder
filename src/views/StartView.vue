<script lang="ts"></script>

<template>
  <main>
    <div class="welcomemsg">
      <div class="header">Welcome to the Basic Dataview Query Builder!</div>
      <div class="msg">
        The Basic Dataview Query Builder will guide you through some questions
        and put together a dataview query based on your answers. You can use this
        query as-is in your vault or as a starting point to refine a more advanced query. <br />
        The goal is to help you on your first dataview queries and to give you a
        better understanding of the syntax and needed information to build
        dataview queries from scratch.
        <br />
        Click the button to start!
      </div>
    </div>
    <router-link to="/questions" class="button is-success is-large start-btn"
      >START!</router-link
    >
    <hr />
    <div class="wotisthis">
      <div class="header">What is this page? What's going on?!</div>
      <div class="msg">
        <a href="https://blacksmithgu.github.io/obsidian-dataview/">Dataview</a>
        is a popular community plugin for the Personal Knowledge Management
        software <a href="https://obsidian.md">Obsidian.md</a>, which are both brilliant
        and highly flexible applications that can be a bit difficult to
        understand in the beginning. <br />
        To make your start into dataview a tad easier, the Basic Dataview
        Query Builder (this very webpage) allows you to click together your
        first queries that'll help you understand the syntax of the plugin and
        guide you through the different pieces of information needed to build a
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
@use "../assets/mixins";

main {
  max-width: 960px;
}
.header {
  @include mixins.heading;
}

.welcomemsg {
  @include mixins.box;
  font-size: 15pt;
}

.start-btn {
  display: block;
  margin: auto;
  margin-top: 2em;
}

.wotisthis {
  margin-top: 2em;
  @include mixins.box;
}
</style>
