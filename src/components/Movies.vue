<template>
  <div class="movies">
    <div class="movie" v-for="(movie, index) in movies" :key="index">
      <div class="movie-btn"><span></span><span></span><span></span></div>
      <div class="movie-image">
        <img :src="movie.poster_path" alt="" />
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="inside-circle">75%</div>
          </div>
        </div>
      </div>
      <div class="movie-title">
        <h3>{{ movie.original_title }}</h3>
      </div>
      <div class="movie-date">
        <p>{{ movie.release_date }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Movie } from "../interfaces/movie";
@Component({
  components: {},
})
export default class Movies extends Vue {
  @Prop([Array]) readonly movies: Movie[] | undefined;
}
</script>

<style lang="scss" scoped>
.movies {
  display: flex;
  overflow-x: auto;
  grid-gap: rem(10);
  .movie {
    text-align: left;
    position: relative;

    &-btn {
      background-color: rgba(238, 238, 238, 0.63);
      position: absolute;
      top: rem(10);
      right: rem(10);
      width: rem(30);
      height: rem(30);
      border-radius: 50%;
      z-index: 2;
      cursor: pointer;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      span {
        background-color: #000;
        width: rem(5);
        height: rem(5);
        border-radius: 50%;
      }
    }
    &-date {
      color: #aaa;
    }
    &-image {
      width: rem(200);
      position: relative;
      margin-bottom: rem(20);
      img {
        width: 100%;
        border-radius: rem(5);
      }
    }
  }
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: rem(40);
  height: rem(40);
  position: absolute;
  z-index: 10;
  border-radius: 50%;
}

.circle-wrap {
  width: rem(40);
  height: rem(40);
  position: absolute;
  left: rem(20);
  bottom: rem(-10);
  background: #1b2930;
  border-radius: 50%;
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: rem(40);
  height: rem(40);
  position: absolute;
  border-radius: 50%;
}

.circle-wrap .circle .mask {
  clip: rect(0, rem(40), rem(40), rem(20));
}

.circle-wrap .inside-circle {
  width: rem(35);
  height: rem(35);
  border-radius: 50%;
  background: #15252b;
  line-height: rem(35);
  text-align: center;
  margin-top: rem(2);
  margin-left: rem(2);
  color: #fff;
  position: absolute;
  z-index: 100;
  font-weight: 500;
  font-size: rem(12);
}

/* color animation */

/* 3rd progress bar */
.mask .fill {
  clip: rect(0, rem(20), rem(40), 0);
  background-color: #8ac425;
}

.mask.full,
.circle .fill {
  animation: fill ease-in-out 3s;
  transform: rotate(135deg);
}

@keyframes fill {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(135deg);
  }
}
</style>
