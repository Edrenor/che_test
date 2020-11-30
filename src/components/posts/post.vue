<template>
  <div class="post">
        <md-card class="md-primary" md-theme="purple-card" md-with-hover>
          <md-ripple>
            <md-card-header>
              <div class="md-title">{{getPost.title}}</div>
            </md-card-header>
            <md-card-content>
              {{getPost.body}}
            </md-card-content>
          </md-ripple>
        </md-card>
  </div>
</template>
<script>
export default {
  name: 'post',
  props: ['id'],
  computed: {
    getPost(){
      return this.$store.getters.getPostById(this.$route.params.id);
    },
  },
  mounted() {
    this.$store.dispatch('fetchPosts');
  },
}

</script>