<script lang="ts">
import Navigation from "../components/dqb-navigation.vue";
import Question from "../components/dqb-question.vue";
import DataviewQuery from "../components/dqb-dataviewQuery.vue";
import DqbFooter from "../components/dqb-footer.vue";

export default {
  components: { Navigation, Question, DataviewQuery, DqbFooter },
};
</script>

<template>
  <main>
    <Navigation></Navigation>
    <Question class="question"></Question>
    <DataviewQuery class="dataviewquery"></DataviewQuery>
  </main>
  <DqbFooter></DqbFooter>
</template>

<style scoped lang="scss">
.question {
  margin: 0;
}
.dataviewquery {
  margin: 1em 0;
}
</style>
