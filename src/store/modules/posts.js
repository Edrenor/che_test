import axios from 'axios';

export default {
    actions: {
         async fetchPosts(ctx){
            const posts = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')  .then(function (response) {
                    return response.data;
                })
            ;
            ctx.commit('updatePosts', posts);
        }
    },
    mutations: {
        updatePosts(state, posts){
            state.posts = posts;
        }
    },
    state: {
        posts: [],
    },
    getters: {
        getPosts(state){
            return state.posts
        },
        getPostById: (state) => (id) => {
            return state.posts.find(post => post.id === id)
        }

    },
}