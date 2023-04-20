import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: {},
        list: [],
    },
    
    getters: {
        fetchedAsk(state){
            return state.ask;
        },
        fetchedItem(state){
            return state.item;
        }
    },
    mutations,    
    //이동//
    // {
    //   SET_NEWS(state, news) { 
    //         state.news = news;
    //     },   
    //     SET_ASK(state, ask) {
    //         state.ask = ask;
    //     },
    //     SET_JOBS(state, jobs) {
    //         state.jobs = jobs;
    //     }
    // }
    
    actions,
    //이동// 
    // {
    //     FETCH_NEWS(context) {
    //         fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS',response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //     },
    //     FETCH_ASK({ commit }) {
    //         fetchAskList()
    //         .then(({ data }) => {
    //             commit('SET_ASK', data);
    //         })
    //         .catch(e => console.log(e))
    //     },
    //     FETCH_JOBS(context) {
    //         fetchJobsList()
    //         .then(response => {
    //             context.commit('SET_JOBS',response.data);
    //         })
    //         .catch(e => console.log(e))
    //     }
    // }
    

  });