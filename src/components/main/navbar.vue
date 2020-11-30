<template>
  <div>
    <md-toolbar class="md-transparent" md-elevation="0">
      Navigation
    </md-toolbar>

    <md-list>
      <md-list-item to="/" exact>
        <md-icon>dynamic_feed</md-icon>
        <span class="md-list-item-text">Posts</span>
      </md-list-item>
      <md-list-item to="photos" exact>
        <md-icon>collections</md-icon>
        <span class="md-list-item-text">Photos</span>
      </md-list-item>
      <md-list-item to="settings" exact>
        <md-icon>settings</md-icon>
        <span class="md-list-item-text">Settings</span>
      </md-list-item>
    </md-list>

  </div>

</template>

<script>

export default {
  name: 'navbar'
}
</script>

<!--<style lang="scss" scoped>-->
<!--.md-app {-->
<!--  min-height: 350px;-->
<!--  border: 1px solid rgba(#000, .12);-->
<!--}-->

<!--.md-drawer {-->
<!--  width: 230px;-->
<!--  max-width: calc(100vw - 125px);-->
<!--}-->
<!--</style>-->
