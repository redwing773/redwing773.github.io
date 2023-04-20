import {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem
} from '../api/index.js';

export default {
    // promise
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //     .then(response => {
    //         context.commit('SET_NEWS',response.data);
    //         return response;
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },
    // FETCH_ASK({ commit }) {
    //     return fetchAskList()
    //     .then(({ data }) => {
    //         commit('SET_ASK', data);
    //         return data;
    //     })
    //     .catch(e => console.log(e))
    // },
    // FETCH_JOBS(context) {
    //     return fetchJobsList()
    //     .then(response => {
    //         context.commit('SET_JOBS',response.data);
    //         return response;
    //     })
    //     .catch(e => console.log(e))
    // },
    // FETCH_USER({ commit }, name ) {
    //     return fetchUserInfo(name)
    //     .then(({ data }) => {
    //         commit('SET_USER', data);
    //     })
    //     .catch(e => console.log(e));
    // },
    // FETCH_ITEM({ commit }, id ) {
    //     return fetchCommentItem(id)
    //     .then(({ data }) => {
    //         commit('SET_ITEM', data);
    //     })
    //     .catch(e => console.log(e));
    // },
    // // #2
    // FETCH_LIST({ commit }, pageName){
    //     // #3
    //     return fetchList(pageName)
    //     .then(({ data }) => {
    //         // #4  
    //         commit('SET_LIST', data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }

    
    // async await
    async FETCH_NEWS(context) {
        try {
            const response = await fetchNewsList();
            context.commit('SET_NEWS',response.data);
            return response;
            
        } catch (error) {
            console.log(error);
        }
    },

    async FETCH_JOBS(context) {
        try {
            const response = await fetchJobsList();
            context.commit('SET_JOBS',response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },

    async FETCH_ASK({ commit }) {
        const response = await fetchAskList();
        commit('SET_ASK', response.data);
        return response;
    },
    
    async FETCH_USER({ commit }, name ) {
        const response = await fetchUserInfo(name);
        commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM({ commit }, id ) {
        const response = await fetchCommentItem(id);
        commit('SET_ITEM', response.data);
        return response;
    },
    // #2
    async FETCH_LIST({ commit }, pageName){
        // #3
        const response = await fetchList(pageName);
        // #4  
        commit('SET_LIST', response.data);
        return response;
    }

}