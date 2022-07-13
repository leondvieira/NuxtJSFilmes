.<template>
    <b-container fluid class="movie-info">
        <movie :id="parseInt($route.params.id)" />
    </b-container>

</template>

<script>
import Movie from "@/components/Movie";

export default {
    components:{
        movie: Movie
    }
}
</script>

<style scoped>
.movie-info {
    background-color: #007bc4;
    min-height: 100vh;
}
</style>