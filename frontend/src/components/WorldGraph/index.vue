<template>
  <div>
    <highcharts :constructorType="'mapChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script>
import worldMap from '@highcharts/map-collection/custom/world.geo.json'

export default {
  data() {
    return {
      chartOptions: {
        chart: {
          map: worldMap
        },
        title: {
          text: 'Highmaps de Donut'
        },
        subtitle: {
          text: 'Nivel de consumo do Donut no mundo'
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            alignTo: 'spacingBox'
          }
        },
        colorAxis: {
          min: 0
        },
        series: [{
          name: ['Donut'],
          states: {
            hover: {
              color: '#BADA55'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          },
          allAreas: true,
          data: [
             [
              "br",
              9.375
            ],
            [
              "pe",
              30
            ]
          ]
        },
        ]
      }
    };
  }
};
</script>
