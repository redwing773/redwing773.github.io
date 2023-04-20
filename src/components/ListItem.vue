<template>
    <div>
        <ul class="news-list">
            <li v-for="item in listItems" v-bind:key="listItems.id" class="post">
            <!-- 포인트 영역 -->
            <div class="points">
                {{  item.points || 0 }}
            </div>
            <!-- 기타 정보 영역 -->
            <div>
                <!-- 타이틀 영역 -->
                <p class="news-title">
                    <template v-if="item.domain">
                        <a v-bind:href="item.url" target="_blank">
                            {{ item.title }}
                        </a>
                    </template>
                    <template v-else>
                        <router-link :to="`item/${item.id}`">
                            {{ item.title }}
                        </router-link>
                    </template>
                </p>
                <small class="link-text">
                    {{ item.time_ago }} by
                    <router-link v-if="item.user" :to="`/user/${item.user}`">{{ item.user }}</router-link>
                    <a v-else :href="item.url" target="_blank">{{ item.domain }}</a>
                </small>
            </div>


            <!--  -->
            <!-- <small>{{ item.time_aog }} by 
                <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small> -->
            </li>
        </ul>
    </div>
  
</template>

<script>
export default {
    
    computed: {
        listItems() { 
            return this.$store.state.list;
            // const name =  this.$route.name;
            // if(name == 'news'){
            //     return this.$store.state.news;
            // } else if(name == 'ask'){
            //     return this.$store.state.ask;
            // } else if(name == 'jobs'){
            //     return this.$store.state.jobs;
            // }
        }
    }

}
</script>

<style scoped>
  .news-list{
    margin:0;
    padding:0;
  }
  .news-list .post{
    list-style:none;
    display:flex;
    align-items:center;
    border-bottom:1px solid #eee;;
  }
  .news-list .points{
    width:80px;
    height:60px;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#42b883;
  }
  .news-title { margin:0; }
  .link-text,
  .link-text a{color:#828282;}


</style>