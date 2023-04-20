<template>
  <div style="width: 800px;">
    <canvas ref="barChart" id="acquisitions"></canvas>
  </div>
</template>

<script>
// import { Chart } from 'chart.js';


export default {
    props: ['propsdata'],
    mounted() {
        // const tar = this.$refs.barChart;
        // const $chart = this.$_Chart;
        // const $propsdata = this.propsdata;
        const _$emit = this.$emit;
        const _this = this;
        
        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
        ]; 


        const chart = new this.$_Chart(this.$refs.barChart,
            {
                type: 'bar',
                data: {
                    labels: data.map(row => row.year),
                    datasets: this.propsdata,
                    // datasets: [
                    //     {
                    //         label: 'Acquisitions by year',
                    //         data: data.map(row => row.count)
                    //     }
                    // ]
                },
                options: {
                    onClick: function() {
                        _this.$emit('ref_chart');
                        // _$emit('ref_chart');
                        console.log('emit send');
                        

                    }
                }
            }
        );
        
    }

}
</script>

<style>

</style>