import axios from 'axios';

export default {
    actions: {
        async fetchPhotos(ctx){
            const photos = await axios.get('https://jsonplaceholder.typicode.com/photos')  .then(function (response) {
                    return response.data;
                })
            ;
            ctx.commit('updatePhotos', photos);
        }
    },
    mutations: {
        updatePhotos(state, photos){
            state.photos = photos;
        }
    },
    state: {
        photos: [],
    },
    getters: {
        getPhotos(state){
            return state.photos
        },
        getPhotoById: (state) => (id) => {
            return state.photos.find(photo => photo.id === id)
        }

    },
}