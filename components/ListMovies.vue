<template>
    <div class="mt-3 mb-3">
        <b-card-group columns>
            <b-card v-for="movie in movies" :key="movie.id" text-variant="black" :header="movie.title"
                class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
export default {
    name: 'ListMovies',
    data() {
        return {
            movies: []
        }
    },
    props:{
        endpoint:{
            type: String,
            required: true,
        },
        filterBy: {
            type: Array,
            required: false,
        },
        params: {
            type: Object,
            required: false
        }
    },
    methods: {
        async getMovies(){
            if (this.endpoint != '' || this.endpoint != false){
                let defaultParams = process.env.defaultParams
                await this.$axios.$get(this.endpoint, { params: defaultParams }).then((response) => {
                    this.movies = response.results.slice(0, 9)
                })
            }
            
        }
    },
    beforeMount(){
        this.getMovies()
    }
}
</script>

<style>
</style>