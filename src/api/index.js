import axios from 'axios';

// 1. HTTP Request & Response 와 관련된 기ㅣ본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/',
}


// 2. API 함수들 정리
function fetchNewsList(){ 
    return axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList(){ 
    try {
        const response = await axios.get( `${config.baseUrl}ask/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

function fetchJobsList(){ 
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`)

}

function fetchUserInfo(username){
    return axios.get(`${config.baseUrl}user/${username}.json`)
}

function fetchCommentItem(id){
    return axios.get(`${config.baseUrl}item/${id}.json`)
}



export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchCommentItem,
    
}


