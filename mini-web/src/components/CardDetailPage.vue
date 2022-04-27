<template>
    <div>
        <div>
            <NavPage />
        </div>
           <div
      class="container mx-auto px-6 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center mt-10"
    >
      <div
        class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg min-w-full"
            :src="detailNews.urlToImage"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{detailNews.title}}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{detailNews.content}}
          </p>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import NavPage from "../components/NavPage.vue";
export default {
    components: {
        NavPage,
    },
    computed: {
    detailNews() {
      return this.$store.state.detailNews
      }
    }
}
</script>