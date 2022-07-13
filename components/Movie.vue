<template>
    <b-row class="text-center">
        <b-col class="my-3" md="8" sm="12">
            <div class="my-2">
                <h1 style="color:white; ">{{ movie.title }}</h1>
                <b-img class="movie-poster" :src="getMovieIMG(movie)" fluid></b-img>
            </div>
        </b-col>
        <b-col class="my-3 pb-5 info" md="4" sm="12">
            <h1 class="my-3" style="color:white; ">Informações</h1>
            <div class="mt-5">
                <h3>Nota:
                    <b-icon-star-fill class="star">
                    </b-icon-star-fill>
                    {{ movie.vote_average }}
                </h3>

            </div>
            <div class="mt-5">
                <h4>Ano:
                    <b-icon-calendar2-check variant="success"></b-icon-calendar2-check>
                    {{ movie.release_date }}
                </h4>
            </div>
            <div class="mt-5">
                <h3>Descrição:</h3>
                <p>
                    {{ movie.overview }}
                </p>
            </div>

            <b-button v-if="is_favorite === false" @click="setFav()" class="w-100 mt-5" variant="success">
                Favoritar
            </b-button>
            <b-button v-if="is_favorite" @click="removeFav()" class="w-100 mt-5" variant="danger">
                Remover Favorito
            </b-button>
        </b-col>
    </b-row>
</template>

<script>
export default {
    data() {
        return {
            movie: {},
            my_movies: [],
            is_favorite: undefined,
            doc_id: ''
        }
    },
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    methods: {
        async getMovie(id) {
            let defaultParams = process.env.defaultParams
            await this.$axios.$get(`/movie/${id}`, { params: defaultParams }).then((response) => {
                this.movie = response
            })
        },
        getMovieIMG(movie) {
            return `http://image.tmdb.org/t/p/original${movie.poster_path}`
        },
        async setFav(){
            this.my_movies.push(this.id)
            this.is_favorite = true;
            this.updateMyMovies()
        },
        async removeFav(){
            const index = this.my_movies.indexOf(this.id)
            if (index > -1){
                this.my_movies.splice(index, 1)
            }
            this.is_favorite = false;
            this.updateMyMovies()
        },
        async updateMyMovies(){
            this.$fire.firestore
                .collection("user")
                .doc(this.doc_id)
                .update({
                    my_movies: this.my_movies
            })

        },
        async getFavorites() {
            if (this.$fire.auth.currentUser.uid){
                let user = await this.$fire.firestore
                    .collection("user")
                    .where("user_id", "==", this.$fire.auth.currentUser.uid)
                    .get();


                this.my_movies = user.docs[0].data().my_movies
                this.doc_id = user.docs[0].id
                if (this.my_movies.includes(this.id)) {
                    this.is_favorite = true
                } else {
                    this.is_favorite = false
                }
            }
        }
    },
    beforeMount() {
        this.getMovie(this.id)
        this.getFavorites()
    },
}
</script>

<style scoped>
.movie-poster {
    border-radius: 2em;
    max-height: 80em;
}

.info {
    background-color: #025686;
    border-radius: 2em;
    color: white;
    height: 50em;
}
</style>