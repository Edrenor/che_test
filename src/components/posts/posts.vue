<template>
  <div class="posts">
    <div class="post" v-for="post in getPosts" :key="post.id">
      <router-link :to="{name: 'post', params: {id: post.id}}" style="text-decoration: none; color: black">
      <md-card class="md-primary" md-theme="purple-card" md-with-hover>
        <md-ripple>
          <md-card-header>
            <div class="md-title">{{post.title}}</div>
          </md-card-header>
          <md-card-content>
            {{post.body}}
          </md-card-content>
        </md-ripple>
      </md-card>
      </router-link>
    </div>

  </div>
</template>
<script>
export default {
  name: 'pages',
  computed: {
    getPosts(){
      return this.$store.getters.getPosts;
    },
  },
  mounted() {
    this.$store.dispatch('fetchPosts');
  },
}

</script>