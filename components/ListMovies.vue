<template>
    <div>
        <b-card-group class="content" deck>
            <b-card 
            v-for="movie in movies" 
            :key="movie.id" 
            overlay img-src="https://picsum.photos/250/250/?image=3" 
            img-alt="Card Image" text-variant="white"                
            :title="movie.title" sub-title="Subtitle">
                <b-card-text>
                   {{ movie.overview }}
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
    methods: {
        async getMovies(){

            let url = "/movie/latest?api_key=7a6c316575389afeedb5d6c5dd145032&language=pt-BR"

            await this.$axios.$get(url).then((response) => {
                this.movies = [...this.movies, response]
            })

            console.log(this.movies)
        }
    },
    beforeMount(){
        this.getMovies()
    }
}
</script>

<style>
.content{
    display: flex;
    width: 100%;
}
</style>