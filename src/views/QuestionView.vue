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
    <Question class="question"></Question>
    <DataviewQuery class="dataviewquery"></DataviewQuery>
  </main>
</template>

<style scoped lang="scss">
.question {
  margin: 0;
}
.dataviewquery {
  margin: 1em 0;
}
</style>
