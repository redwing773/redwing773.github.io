<template>
  <div id="app">
    <spinner :loading="loadingStatus"></spinner>
    <tool-bar v-if="$route.name !== 'portfolio'"></tool-bar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue';
import bus from './utils/bus.js';
// import axios from 'axios';
// import { handleException } from './utils/handler.js';
export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
      items: [],
      chartDataSet: [
        {
          label: 'Acquisitions by year',
          data: [10, 20, 10, 20, 50, 30, 40],
        }
      ],
    };
  },

  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
    refreshChart() {
      console.log('emit received');
      this.chartDataSet = [
        {
          label: 'Acquisitions by',
          data: [20, 30, 20, 30, 50, 40, 10],
        }
      ];
      // chart.update();
    },
    // loginUser() {
    //   axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then(response => {
    //     if(response.data[0].id === 1) {
    //       console.log('사용자가 인증되었습니다');
    //       axios.get('https://jsonplaceholder.typicode.com/todos')
    //       .then(response => {
    //         console.log(response.data);
    //         this.items = response.data;
    //       });
    //     }
    //   })
    //   .catch(error => console.log(error));
    // },
    // async loginUser1() {
    //   try {
    //     let response = await axios.get('https://jsonplaceholder.typicode.com/users')
    //     if(response.data[0].id === 1){
    //       console.log('사용자가 인증되었습니다');
    //       let list = await axios.get('https://jsonplaceholder.typicode.com/todos');
    //       this.items = list.data;
    //     }
    //   } catch (error) {
    //     handleException(error);// 공통예외처리 용 util에 파일 추가
    //     console.log(error);
    //   }

    // },
    // created() {
    //    getChartData[()]
    //   axios.get('charts/line/1')
    //   .then(response => this.chartDataSet = response.data)
    //   .catch(error => console.log(error));

    // },
  },

  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },

  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  },
}
</script>

<style>
@import '../public/css/style.css';
body {
  padding: 0;
  margin: 0;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity .3s ease;
}

.page-enter,
.page-leave-to

/* .page-leave-active below version 2.1.8 */
  {
  opacity: 0;
}

a {
  text-decoration: none;
  color: #34495e;
}

a:hover {
  color: #42b883;
  text-decoration: underline;
}

a.router-link-exact-active {
  text-decoration: underline;
}</style>
