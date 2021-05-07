<template>
    <v-snackbar
      v-model="snack.snackbar"
      :timeout="snack.timeout"
      :color="snack.color"
    >
      {{ snack.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snack.snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>


<script>
  export default {
      props:['snack'],
    data: () => ({
      snackbar: false,
      text: 'My timeout is set to 2000.',
      timeout: 2000,
      color:'secondary'
    }),
  }
</script>