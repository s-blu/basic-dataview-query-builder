<script lang="ts">
  import Navigation from "../components/dqb-navigation.vue";
  import Question from "../components/dqb-question.vue";
  import DataviewQuery from "../components/dqb-dataviewQuery.vue";
  
  export default {
    components: { Navigation, Question, DataviewQuery },
  };
  </script>

<template>
  <main>
    <Navigation></Navigation>
    <Question :question="currentQuestion"></Question>
    <DataviewQuery :query="query"></DataviewQuery>
  </main>
</template>