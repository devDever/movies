<template>
  <div>
    <Movies :movies="movies" />
    {{ movies.movies }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Movies from "@/components/Movies.vue";
import { Movie } from "@/interfaces/movie";
import { moviesModule } from "../store/modules/movies";
@Component({
  components: {
    Movies,
  },
  created() {
    if (!moviesModule.movies.length) moviesModule.getMovies();
  },
})
export default class IndexPage extends Vue {
  get movies(): Movie[] {
    return moviesModule.movies;
  }
}
</script>

<style lang="scss"></style>
