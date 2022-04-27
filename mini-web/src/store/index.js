import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news:[],
    detailNews: {}
  },
  getters: {
  },
  mutations: {
    GET_NEWS (state, payload) {
      state.news = payload
    },
    GET_NEWS_BY_ID(state, payload){
      state.detailNews = payload
    }
  },
  actions: {
    async getNewsData (context) {
      try {
        const response = await axios.get("http://localhost:3000/news")
        const news = response.data
        context.commit("GET_NEWS", news)
      } catch (error) {
        console.log(error)
      }
    },
    async getDetailNews (context, payload){
      try {
        const response = await axios.get(`http://localhost:3000/news/${payload}`)
        const detailnews = response.data
        context.commit("GET_NEWS_BY_ID", detailnews)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteNews (context, payload) {
      try {
        await axios.delete(`http://localhost:3000/news/${payload}`)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
