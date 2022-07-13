<template>
    <div>
        <div class="pt-3" style="display: flex">
            <b-input v-model="input" @keyup.enter="searchMovies" placeholder="Search movies"></b-input>
            <b-button v-if="query == ''" @click="searchMovies" class="ml-2" variant="success">
                <b-icon-search>
                </b-icon-search>
            </b-button>
            <b-button v-else @click="clearInput" class="ml-2" variant="danger">
                <b-icon-arrow-counterclockwise>
                </b-icon-arrow-counterclockwise>
            </b-button>
        </div>
        <list-movies v-if="query" :endpoint="query" :pagination="15" />
    </div>
</template>

<script>
import ListMovies from '@/components/ListMovies'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    components: {
        ListMovies, BootstrapVue,BootstrapVueIcons
    },
    name: 'SearchMovies',
    data() {
        return {
            input: '',
            query: '',
        }
    },
    methods: {
        searchMovies(){
            this.query = "/search/movie?query=" + this.input
        },
        clearInput(){
            this.query = '';
            this.input = '';
        }
    },
}
</script>

<style scoped>

</style>