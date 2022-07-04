<template>
    <b-container fluid class="search-content">
        <search-movies style="height: 100%" />
        <b-button @click="goToPreviusRoute" variant="info" size="lg" class="mr-2 my-3">
            <b-icon-arrow-left>
            </b-icon-arrow-left>
        </b-button>
    </b-container>
</template>

<script>
import SearchMovies from '@/components/SearchMovies'

export default {
    components: {
        'search-movies': SearchMovies
    },
    data() {
        return {
            prevRoute: false,
        }
    },
    methods: {
        goToPreviusRoute(){
            this.$router.push(this.prevRoute.path)
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.prevRoute = from
        })
    }
}
</script>

<style scoped>
.search-content {
    background-color: #007bc4;
    min-height: 100vh;

}
</style>