<template>
<div>
    <v-card>
    <v-container>
      <v-row
        align="center"
      >
        <v-col cols="12">
          <strong> Selecione as opções para comparação </strong>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-autocomplete
            v-model="valuesFoodSelect"
            :items="items"
            outlined
            color="secondary"
            chips
            small-chips
            label="Foods"
            multiple
            item-color="secondary"
          ></v-autocomplete>
        </v-col>
        <v-col cols="2">
           <v-select
              v-model="year"
              :items="states"
              label="Select"
              hide-details
              prepend-icon="mdi-calendar"
              single-line
              color="secondary"
              item-color="secondary"
            ></v-select>
        </v-col>
        <v-col cols="2"> 
          <v-btn
            :loading="loading"
            class="ma-2"
            outlined
            color="secondary"
            @click="compareFoodTrends"
          >
            Comparar
          </v-btn>
        </v-col>  
      </v-row>
    </v-container>
  </v-card>
  
  <v-card v-if="comparate">
    <v-container>
      <div v-if="comparate">
        <strong class="container-text mb-3">Dados Geral de comparação do ano de {{year}}</strong>
      </div>
      <div class="container-jus mb-12">    
          <v-scroll-y-transition v-if="comparate"  mode="out-in">
            <line-chart class="small" :chart-data="datacollection"></line-chart>  
        </v-scroll-y-transition>
      </div>

      <v-row v-if="comparate" >
        <v-col class="d-flex text-center" cols="4">
          <v-select
            v-model="foodsSelect"
            :items="itemsFoodsSelect"
            label="Select"
            hide-details
            prepend-icon="mdi-food"
            single-line
            color="secondary"
            item-color="secondary"
            outlined
            dense
            @change="changeSelectedWorldMap"
          />
        </v-col>    
        </v-row>
        <v-row>
        <v-col>
          <v-scroll-y-transition v-if="comparate"  mode="out-in">
            <highcharts :constructorType="'mapChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
          </v-scroll-y-transition>
        </v-col>
        </v-row>
        
    
    </v-container>
  </v-card>
  <SnackBar :snack="snack" />
 </div> 
</template>
<script>
  import LineChart from  '../components/Graph/LineGraph';
  import FoodService from '../services/Foods';
  import SnackBar from '../components/Messagens/SnackBar';
  import worldMapMixin from '../mixins/worldMapMixin';
  import worldMap from '@highcharts/map-collection/custom/world.geo.json';

  export default {
    components: {LineChart,SnackBar},
    mixins: [worldMapMixin],
    data: () => ({
      items: [],
      foods:[],
      valuesFoodSelect: [],
      value: null,
      datacollection: {},
      year:'2021',
      comparate: false,
      loading:false,
      fids: []
    }),
    mounted() {
      this.getFoods();
    },
    methods: {
      compareFoodTrends() {

        if (this.valuesFoodSelect.length < 2) {
          this.snack.snackbar = true;
          this.snack.text = "Selecione no mínimo duas guloseimas";
          return 0;
        }

         this.fids = this.valuesFoodSelect.map(vf => {
          return  this.foods.filter(f => f.name === vf)[0];
        }).map(t => t.id);
          
          if (this.fids === undefined)
            return 0;

        this.loading = true;

        this.itemsFoodsSelect = this.valuesFoodSelect;
        this.foodsSelect = this.valuesFoodSelect[0];

        FoodService.getComparateFoods({food_id:this.fids,date:this.year})
        .then(response => {

          const res = response.data;
          this.datacollection = res;
          this.getGeoTrendAllCountriesById(this.fids[0], this.fids, this.valuesFoodSelect[0]);

          this.comparate= true;
          this.loading = false;
          
        }).catch(e => {
          this.snack.snackbar = true;
          this.snack.text = e.response.error ? e.response.error : 'Error Interno do servidor'
          this.loading = false;
        });
        
      },
      getFoods() {
        FoodService.getFoods().then(res => {
          this.foods = res.data.data;
          this.items = this.foods.map(e => e.name);

        }).catch(e => {
          this.snack.snackbar = true;
          this.snack.text =  e.response.error ? e.response.error : 'Error Interno do servidor'
          
        });
      },
     async getGeoTrendAllCountriesById(food_id_for_comparate, foods_id, nameFood) {
       await FoodService.getGeoTrendAllCountriesById({food_id_for_comparate,foods_id})
        .then(response => {
          const ob = {
            
              chart: {
                map: worldMap
              },
              title: {
                text: `Mapa grafico mundial  de ${nameFood}`
              },
              subtitle: {
                text: `Nível de interesse de ${nameFood}`
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
                name: nameFood,
                states: {
                  hover: {
                    color: '#BADA55'
                  }
                },
                dataLabels: {
                  enabled: true,
                  format: '{point.name}'
                },
                allAreas: false,
                data: response.data
              },
              ]
          }
         this.chartOptions = ob;
        }).catch(e => {
          this.snack.snackbar = true;
          this.snack.text =  e.response.error ? e.response.error : 'Error Interno do servidor'
        })
      },
      changeSelectedWorldMap() {
        const food_id_for_comparate = this.foods.filter(f => f.name ===  this.foodsSelect)[0].id;
        this.getGeoTrendAllCountriesById(food_id_for_comparate, this.fids, this.foodsSelect);
      }

    }
  }
</script>
<style>
.small {
  width: 500px;
  
}
.container-jus {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>