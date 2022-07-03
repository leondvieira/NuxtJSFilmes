<template>
    <div>
        <div class="pt-3" style="display: flex">
            <b-input v-model="input" placeholder="Search movies"></b-input>
            <b-button v-if="query == ''" @click="searchMovies" class="ml-3" variant="success">
                Pesquisar
            </b-button>
            <b-button v-else @click="clear" class="ml-3" variant="danger">
                Limpar
            </b-button>
        </div>
        <list-movies v-if="query" :endpoint="query" />
    </div>
</template>

<script>
import ListMovies from '@/components/ListMovies'

export default {
  components: { ListMovies },
    name: 'SearchMovies',
    data() {
        return {
            input: '',
            query: '',
        }
    },
    methods: {
        searchMovies(){
            this.query = "/search/movie/?query=" + this.input
        },
        clear(){
            this.query = '';
            this.input = '';
        }
    },
}
</script>

<style>

</style>