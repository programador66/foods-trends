<template>
   <v-card
   :color="item.color"
   dark
   >
   <div class="d-flex flex-no-wrap justify-space-between">
      <div>
         <v-card-title
         class="headline"
         v-text="item.title"
         ></v-card-title>

         <v-card-subtitle v-text="item.artist"></v-card-subtitle>

         <v-card-actions>
         <v-btn
            class="ml-2 mt-5"
            outlined
            rounded
            small
            @click="verify(item.title)"
         >
            Verificar
         </v-btn>
         </v-card-actions>
      </div>

      <v-avatar
         class="ma-3"
         size="54px"  
      >
      <img
         :src="item.src"
         alt="John"
         color="primary"
      />
      </v-avatar>
   </div>
   </v-card>
</template>

<script>
export default {
   name:"CardMenu",
   props:["item"],
   data: () => ({

   }),
   methods: {
      verify(item) {
         
         if (item === "Produtos") {
            this.$router.push("foods");
         } else if (item === "Comparar Produtos") {
            this.$router.push("foods-trend");
         }
            
      }
   }
}
</script>

<style>

</style>