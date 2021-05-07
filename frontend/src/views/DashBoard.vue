<template>
<v-container>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
          sm="6"
          lg="4"
        >
          <CardMenu :item="item" />
        </v-col>
      </v-row>
    </v-container>

</template>

<script>
// @ is an alias to /src
import world from '../assets/icons-menu/world.svg';
import food from '../assets/icons-menu/foods.svg';
import graph from '../assets/icons-menu/graficos.svg';

import CardMenu from '../components/Cards/CardMenu';

export default {
  components:{CardMenu},
  name: "DashBoard",
  data: () => ({
    items: [
        {
          color: 'secondary',
          src: food,
          title: 'Produtos',
          artist: 'Lista de produtos disponíveis',
        },
        {
          color: 'secondary',
          src: graph,
          title: 'Comparar Produtos',
          artist: 'Produtos mais consumidos',
        },
        {
          color: 'secondary',
          src: world,
          title: 'Produtos no Mundo',
          artist: 'Produtos mais consumidos pelo mundo',
        },
      ],
  })
};
</script>
