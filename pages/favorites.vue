<template>
    <div class="container">
        <h1 class="text-center my-2">Meus Favoritos</h1>
        <list-movies v-if="this.my_movies" :movieIds="this.my_movies" :pagination="30" />
    </div>
</template>

<script>
import ListMovies from '@/components/ListMovies'

export default {
    data() {
        return {
            my_movies: undefined,
        }
    },
    components: {
        'list-movies': ListMovies
    },
    methods: {
        async getFavorites(){
            if (this.$fire.auth.currentUser.uid) {
                let user = await this.$fire.firestore
                    .collection("user")
                    .where("user_id", "==", this.$fire.auth.currentUser.uid)
                    .get();
                this.my_movies = user.docs[0].data().my_movies
            }
        }
    },
    beforeMount() {
        const user = this.$fire.auth.currentUser
        if (!user) {
            this.$router.push('/login')
        }
        this.getFavorites()
    }
}
</script>

<style lang="scss" scoped>

</style>