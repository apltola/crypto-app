<template>
  <div class="container">
    <div class="wrapper">
      <CricleSpin v-if="loading" :size="'80px'" />
      <h2 class="title">{{ portfolioName }}{{ renderCurrentValue() }}</h2>
      <apexcharts
        :options="chartOptions"
        :series="series"
        class="chart"
        height="300"
      >
      </apexcharts>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import VueApexCharts from 'vue-apexcharts';
import format from 'date-fns/format';
import { Circle as CricleSpin } from 'vue-loading-spinner';
import { isMobile } from 'mobile-device-detect';
import { formatNumber } from '../util/portfolio';

export default {
  name: 'PortfolioValue',

  components: { apexcharts: VueApexCharts, CricleSpin },

  data() {
    return {
      portfolioName: '',
      loading: true,
      chartOptions: {
        chart: {
          id: 'area-datetime',
          type: 'area',
          toolbar: {
            show: !isMobile,
          },
        },
        zoom: {
          autoScaleYaxis: true,
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          opposite: true,
        },
        xaxis: {
          type: 'datetime',
          //tickAmount: 8,
          labels: {
            hideOverlappingLabels: true,
            rotate: 0,
            rotateAlways: false,
          },
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy',
          },
        },
        legend: {
          horizontalAlign: 'left',
        },
        stroke: {
          width: 1.5,
        },
        colors: ['#6e7ff3', '#5753c9', '#3d4e81'],
        fill: {
          gradient: {
            enabled: true,
            opacityFrom: 1,
            opacityTo: 0.9,
          },
        },
        grid: {
          borderColor: '#f5f5f5',
          clipMarkers: false,
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
      },
      series: [
        {
          name: 'series-1',
          data: [],
        },
      ],
    };
  },

  methods: {
    async fetchData(id) {
      try {
        const res = await axios.get(`/api/portfolio/${id}/valuehistory`);
        this.loading = false;
        this.portfolioName = res.data.name;
        this.series = [
          {
            name: 'Portfolio Value',
            data: res.data.data,
          },
        ];
      } catch (error) {
        console.log(error);
      }
    },

    renderCurrentValue() {
      const { data } = this.series[0];

      if (data.length > 0) {
        const lastIdx = data.length - 1;
        let val = data[lastIdx][1].toString();
        if (val.length >= 4) {
          let slicePoint = val.length - 3;
          return `: ${val.slice(0, slicePoint)} ${val.slice(
            slicePoint,
            val.length
          )} €`;
        }
        return `: ${val} €`;
      }
    },
  },

  async mounted() {
    const { id } = this.$route.params;
    this.fetchData(id);
  },

  /* beforeRouteEnter(to, from, next) {
    next((vm) => {
      const { id } = to.params;
      console.log(to);
      vm.fetchData(id);
    });
  }, */
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.wrapper {
  position: relative;
  flex: 1;
  /* max-width: 1000px; */
}

.title {
  text-transform: capitalize;
}

.spinner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 99;
}

@media screen and (max-width: 600px) {
  .container {
    margin-left: -15px;
    margin-right: -5px;
  }
}
</style>
