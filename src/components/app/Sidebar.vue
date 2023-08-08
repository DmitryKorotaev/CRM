<template>
  <ul class="sidenav app-sidenav " :class="{ open: value }">
    <router-link
      v-for="link in links"
      :key="link.url"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <li>
        <a href="#" class="waves-effect waves-orange pointer">{{
          link.title
        }}</a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ["value"],
  data: () => ({
    links: [
      { title: "Счет", url: "/", exact: true },
      { title: "История", url: "/History" },
      { title: "Планирование", url: "/Planning" },
      { title: "Новая запись", url: "/Record" },
      { title: "Категории", url: "/Categories" },
    ],
  }),
};
</script>
