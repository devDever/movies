// user-module.ts
import { VuexModule, Module, Mutation, Action } from "vuex-class-modules";
import { Movie } from "@/interfaces/movie";
import axios from "axios";

@Module
class MoviesModule extends VuexModule {
  movies: Movie[] = [];

  get gMovies(): string {
    return "this.movies";
  }

  @Mutation
  setMovies(movies: Movie[]) {
    const newMovies: Movie[] = [];
    const url = "https://image.tmdb.org/t/p/w500";
    movies.forEach((m: Movie) => {
      m.release_date = moment(m.release_date).locale("ru").format("LL");
      m.poster_path = url + m.poster_path;
      newMovies.push(m);
    });
    this.movies = movies;
  }

  @Action
  async getMovies() {
    const movies = (await axios.get("discover/movie")).data.results;
    this.setMovies(movies);
  }
}

import store from "../index";
import moment from "moment";
export const moviesModule = new MoviesModule({ store, name: "movies" });
