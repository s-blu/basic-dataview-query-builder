import { createRouter, createWebHistory } from "vue-router";
import StartView from "../views/StartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: StartView,
    },
    {
      path: "/questions",
      name: "question",
      component: () => import("../views/QuestionView.vue"),
    },
    {
      path: "/result",
      name: "result",
      component: () => import("../views/ResultView.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("../views/PrivacyView.vue"),
    },
  ],
});

export default router;
