<template>
  <div>
    <div>
      <NavPage />
    </div>
    <div>
      <div
        class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
      >
        <CardPage v-for="news in news" v-bind:key="news.id" :news="news" />
      </div>
    </div>
  </div>
</template>

<script>
import NavPage from "../components/NavPage.vue";
import CardPage from "../components/CardPage.vue";
export default {
  components: {
    NavPage,
    CardPage,
  },
  computed: {
    news() {
      return this.$store.state.news;
    },
  },
  created() {
    this.$store.dispatch("getNewsData");
  },
};
</script>
