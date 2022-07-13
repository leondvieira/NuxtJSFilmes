<template>
    <div class="mt-3 mb-3">
        <b-card-group columns>
            <b-card v-for="movie in movies" :key="movie.id" text-variant="black" :header="movie.title"
                :img-src="getMovieIMG(movie)" class="text-center" @click="accessMovie(movie.id)">
                <b-card-text class="overview-text">
                    <div>
                        <b-icon-star class="star">
                        </b-icon-star>
                        {{ movie.vote_average }}
                    </div>
                    <div>
                        <b-icon-calendar2-check variant="success"></b-icon-calendar2-check>
                        {{ movie.release_date }}
                    </div>
                    <div class="overview">
                        {{movie.overview}}

                    </div>
                </b-card-text>
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
            required: false,
        },
        filterBy: {
            type: Array,
            required: false,
        },
        params: {
            type: Object,
            required: false
        },
        pagination:{
            type: Number,
            required: true,
        },
        movieIds:{
            type: Array,
            required: false
        }
    },
    methods: {
        async getMovies(){
            let defaultParams = process.env.defaultParams
            if ((this.endpoint != '' || this.endpoint != false) && this.endpoint != undefined){ 
                await this.$axios.$get(this.endpoint, { params: defaultParams }).then((response) => {
                    this.movies = response.results.slice(0, this.pagination)
                })                

            }else{
                if(this.movieIds){
                    for (const movie of this.movieIds) {
                        await this.$axios.$get(`/movie/${movie}`, { params: defaultParams }).then((response) => {
                            this.movies = [...this.movies, response]
                        })
                    }
                }else{
                    this.movies = []
                }
            }
        },
        getMovieIMG(movie) {
            return `http://image.tmdb.org/t/p/original${movie.poster_path}`
        },
        accessMovie(id){
            this.$router.push(`/movie/${id}`)
        }
    },
    beforeMount(){
        this.getMovies()
    }
}
</script>

<style scoped>
.star{
    color: rgb(221, 188, 2);
}
.overview{
    word-break: break-word;
    overflow: hidden;
    height: 9em;
}
</style>