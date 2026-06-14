import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";
import PersonneDetailsView from "@/views/PersonneDetailsView.vue";
import PersonneShowsView from "@/views/PersonneShowView.vue";
import AdresseView from "@/views/AdresseView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    alias: ["/home-page", "/accueil"],
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/personne/:id(\\d)",
    name: "personne-details",
    props: true,
    component: PersonneDetailsView,
    children: [
        {
            path: "adresse",
            name: "personne-adresse",
            component: PersonneDetailsAdresseView,
        }
    ]
  },
  {
    path: "/adresse",
    name: "adresse",
    component: AdresseView,
  },
  {
    path: "/person",
    redirect: "/personne",
    // redirect : {name: ""}
  },
  {
    path: "/personne",
    name: "personne-show",
    component: PersonneShowsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
});

export default router;
