<template>
  <div class="container mb-10">
      <h1 class="title">Welcome To Test Login Page</h1>
      <list-movies />
    </div>
</template>

<script>
import ListMovies from '@/components/ListMovies'

export default {
  components: {
    'list-movies': ListMovies
  }
}
</script>

<style>

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>