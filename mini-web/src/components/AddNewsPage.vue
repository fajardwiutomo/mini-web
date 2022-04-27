<template>
  <div>
    <div>
      <NavPage />
    </div>
    <div class="mt-10">
      <h3 class="text-3xl font-bold mb-5 hover:text-orange-600">Add News</h3>
      <form action="" @submit.prevent="addNews">
      <div>
        <div class="flex justify-center mt-2">
          <div class="mb-3 xl:min-w-full px-20">
            <label
              for="Title"
              class="form-label inline-block mb-2 text-gray-700 text-xl"
              >Title</label
            >
            <input
              v-model="title"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="Title"
              placeholder="Title here"
            />
          </div>
        </div>
        <div class="flex justify-center mt-2">
          <div class="mb-3 xl:min-w-full px-20">
            <label
              for="ImageUrl"
              class="form-label inline-block mb-2 text-gray-700 text-xl"
              >Image Url</label
            >
            <input
              v-model="urlToImage"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="ImageUrl"
              placeholder="Url Image"
            />
          </div>
        </div>
        <div class="items-center mx-20">
          <label class="text-xl">
            <span class="text-gray-700">Description</span>
            <textarea
              v-model="description"
              class="form-textarea mt-1 min-w-full border border-solid text-base font-normal"
              rows="4"
              placeholder="  Enter some long description."
            ></textarea>
          </label>
        </div>
      </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mt-5 rounded-full"
        >
          Add
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import NavPage from "../components/NavPage.vue";
export default {
  data() {
    return {
      title: "",
      urlToImage: "",
      description: "",
    };
  },
  components: {
    NavPage,
  },
  methods: {
    addNews() {
      const data = {
        title: this.title,
        urlToImage: this.urlToImage,
        description: this.description,
      };
      this.$store.dispatch("addNews", data);
      this.$router.push("/homepage");
    },
    created(){ 
    this.$store.dispatch("getNewsData");
    },
  },
};
</script>
