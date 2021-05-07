<template>
  <v-app>
    <v-app-bar app color="secondary" dark flat>
      <div class="d-flex align-center">
     <v-app-bar-nav-icon color="primary"  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title><router-link to="/" style="color:#FFFFFF"> Dashboard </router-link></v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        text
        color="primary"
      >
        <span class="mr-2">Sair</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-main>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="secondary"
      dark
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title >Caio César</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title @click="home(item.title)">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data: () => ({
      drawer: null,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-forum' },
      ],
  }),
  methods: {
    home(item) {
      if(item === 'Dashboard')
      return this.$router.push("/");
    }
  }
};
</script>
<style>
.v-application a {
    color: #FFFFFF;
    text-decoration: none;
}

 a:hover {
  color:aqua;
}

</style>
