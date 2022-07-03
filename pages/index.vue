<template>
  <div class="container">
    <h1 class="text-center my-2">Populares</h1>
    <list-movies endpoint="/movie/popular/" />
  </div>
</template>

<script>
import ListMovies from '@/components/ListMovies'

export default {
  components: {
    'list-movies': ListMovies
  },
}
</script>

<style scoped>
</style>