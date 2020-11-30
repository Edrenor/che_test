<template>
  <div id="app">
    <div class="page-container md-layout-row">
      <md-app>
        <md-app-drawer md-permanent="full">
          <navbar/>
        </md-app-drawer>

        <md-app-content>
        <router-view/>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>

import Navbar from "@/components/main/navbar";

export default {
  name: 'App',
  components: {Navbar},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #388ce0;
  /*margin-top: 60px;*/
}
</style>
