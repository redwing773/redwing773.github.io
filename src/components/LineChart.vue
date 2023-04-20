<template>
    <div style="width:800px;">
        <canvas ref="lineChart" id="myChart"></canvas>
    </div>
</template>

<script>
// import Chart from 'chart.js';
export default {
    mounted() {
        const ctx = this.$refs.lineChart;
        new this.$_Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
                borderColor: 'rgb(255, 99, 132)',
            }],

        },
        options: {
            scales: {
            y: {
                beginAtZero: true
            }
            }
        }
        });
    }
}
</script>

<style>

</style>