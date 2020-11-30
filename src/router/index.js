import VueRouter from 'vue-router';

import Posts from '../components/posts/posts'
import Post from '../components/posts/post'
import Photos from '../components/photos/photos'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'posts',
            component: Posts,
        },
        {
            path: '/posts/:id',
            name: 'post',
            component: Post,
            props: true
        },

        {
            path: '/photos',
            name: 'photos',
            component: Photos,
        },
        {
            path: '/settings',
            name: 'settings',
            component: Posts,
        }
    ],
});