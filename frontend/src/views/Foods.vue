<template>
  <v-card flat>
    <v-card-title class="d-flex text-center">
      Produtos Disponíveis
    </v-card-title>
    <v-row
      class="pa-4"
      justify="space-between"
    >
      <v-col cols="3" @click="consumoGeral = false">
        <v-treeview
          :active.sync="active"
          :items="items"
          :load-children="getFoods"
          :open.sync="open"
          activatable
          color="secondary"
          open-on-click
          transition   
        >
          <template v-slot:prepend="{ item }" >
            <v-icon v-if="!item.children">
              mdi-food
            </v-icon>
          </template>
        </v-treeview>
      </v-col>

      <v-divider vertical></v-divider>
      <v-col
        class="d-flex text-center"
      >
        <v-scroll-y-transition mode="out-in">
          <div
            v-if="!selected"
            class="title grey--text text--lighten-1 font-weight-light"
            style="align-self: center;"
          >
            Selecione uma guloseima
          </div>
          <v-card
            v-else
            :key="selected.id"
            class="pt-6 mx-auto"
            flat
            max-width="800"
          >
            <v-card-text>
              <v-avatar
                size="88"
              >
                <v-img
                  :src="`${selected.image}`"
                  class="mb-6"
                ></v-img>
              </v-avatar>
              <h3 class="headline mb-2">
                {{ selected.name }}
              </h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-row
             v-if="!consumoGeral"
              class="text-left"
              tag="v-card-text"
            >
              <v-col
                class="text-center mr-6 mb-2"
                tag="strong"
                cols="5"
              >
                Description:
              </v-col>
              <v-col> {{selected.description}} </v-col>
            </v-row>
            <v-row>
             <v-col v-if="consumoGeral" cols="12">
              <v-scroll-y-transition  mode="out-in">
                  <v-row
                    class="pa-1 col-12"  
                    > 
                    <v-col
                      class="text-center mr-8 mb-2"
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <div>
                        <strong>Dados Geral de : {{ selected.name }}</strong>
                        <line-chart :chart-data="datacollection"></line-chart>
                        
                      </div>
                     
                    </v-col>
                    
                    <v-col
                      class="text-center mr-1 mb-2"
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <div>
                        <strong>Consumo de {{ selected.name }} nos Países</strong>
                        <bar-chart :chart-data="dataCollectionBar"></bar-chart>
                        
                      </div>
                     
                    </v-col>
                  </v-row>
                
              </v-scroll-y-transition>
              </v-col>
             
            </v-row>
            <v-row>
              <v-col>
                <v-btn
                  v-if="!consumoGeral"
                  class="ma-2"
                  outlined
                  color="secondary"
                  @click="getFoodsByIdTrend(selected)"
                >
                  Verificar Consumo Geral
                </v-btn>

              </v-col>
            </v-row>
          </v-card>
        </v-scroll-y-transition>
      </v-col>
    </v-row> 
  </v-card>
</template>

<script>
  import LineChart from '../components/Graph/LineGraph';
  import BarChart from '../components/Graph/BarGraph';

  import getRandomColor from '../helpers/FoodsHelper';

  import FoodsService from '../services/Foods';
  import Cupcake from '../assets/image/cupcake.jpg';
  import ApplePie from '../assets/image/apple-pie.jpg';
  import Brownie from '../assets/image/brownie.jpg';
  import CarrotCake from '../assets/image/carrot-cake.jpg';
  import CheeseCake from '../assets/image/cheesecake.jpg';
  import Cookie from '../assets/image/cookie.jpg';
  import Donut from '../assets/image/donut.jpg';
  import Fudge from '../assets/image/fudge.jpg';
  import IceCream from '../assets/image/ice-cream.jpg'
  import RedVelvet from '../assets/image/red-velvet.jpg';

  import FoodsTrendService from '../services/Foods';

  export default {
      components: {
        LineChart,
        BarChart
      },
    data: () => ({
      active: [],
      avatar: null,
      open: [],
      foods: [], 
      cupCake: Cupcake,
      applePie:ApplePie,
      brownie:Brownie,
      carrotCake:CarrotCake,
      cookie: Cookie,
      cheeseCake: CheeseCake,
      donut: Donut,
      fudge: Fudge,
      iceCream: IceCream,
      redVelvet: RedVelvet,
      consumoGeral:false,
      datacollection: {},
      dataCollectionBar:{}

    }),
    mounted() {
      this.getFoods();
    },
    computed: {
      items () {
        return [
          {
            name: 'Guloseima',
            children: this.foods,
          },
        ]
      },
      selected () {
        if (!this.active.length) return undefined

        const id = this.active[0]

        return this.foods.find(food => food.id === id)
      },

    },
   methods: {
      async getFoods() {
        FoodsService.getFoods()
        .then(res => {
          const food_api = res.data.data;
          
          const food_iterator = food_api.map(e => {
            return {
              description:e.description,
              id: e.id,
              image: this.handleChoiseImgComponent(e.name),
              name: e.name
            }
          })

          this.foods = food_iterator;

          })
        .catch(e => console.log(e.response));
      },
      handleChoiseImgComponent(name) {
        if (name == 'Cupcake')
          return this.cupCake;
        
        if(name == 'Apple Pie')
        return this.applePie;

        if(name == 'Brownie')
        return this.brownie;

        if(name == 'Brownie')
        return this.brownie;

        if(name == 'Carrot Cake')
        return this.carrotCake;

        if(name == 'Cookie')
        return this.cookie;

        if(name == 'Donut')
        return this.donut;

        if(name == 'Cheesecake')
        return this.cheeseCake;

        if(name == 'Fudge')
        return this.fudge;

        if(name == 'Ice Cream')
        return this.iceCream;

        if(name == 'Red Velvet')
        return this.redVelvet;
      },
    getFoodsByIdTrend(selected) {
      this.consumoGeral = true;

      FoodsTrendService.getFoodById(selected.id)
      .then(response => {
        const food = response.data;

        this.datacollection = {
          labels: food.labels,
          datasets: [
            {
              borderColor: getRandomColor(),
              label: selected.name,
              backgroundColor: 'rgba(0,0,0,0)',
              data:food.data
            }
          ]
        }

        FoodsTrendService.getGeoTrendFoodById(selected.id).then(response => {
          const geoFood = response.data;

          this.dataCollectionBar = {
            labels: geoFood.labels,
            datasets: [
              {
                borderColor: getRandomColor(),
                label: selected.name,
                backgroundColor: getRandomColor(),
                data:geoFood.data
              }
            ]
          }
        }).catch(e => {
          console.log(e)
        })

      })
      .catch(e => console.log(e.response));
    }
    },
  }
</script>