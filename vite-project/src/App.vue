
<script>
  import axios from 'axios';
  import {store} from './store';
  export default {
    name: 'BoolFlix',
  data() {
    return {
    store,
    imma: 'https://image.tmdb.org/t/p/',
    misura: 'w200',
    ita: '../src/assets/img/italia.jpg',
    en: '../src/assets/img/english.jpg',
    starNumber: 5,
    };
  },
  methods: {
    getVote(vote){
      return Math.ceil(vote / 2);
    },
    searchMovies() {
    console.log('ho cliccato sul bottone');

      const url =
      this.store.apiInfo.baseUrl + this.store.apiInfo.endpoints.movies + '? api_key =';

      axios
      .get(url, {
            params: {
                api_key: this.store.apiInfo.key,
                ritorno: this.store.apiInfo.query,
                language: this.store.languageKey,
                query: this.store.searchKey,
              },
            })
            .then((response) => {
              console.log(response.data.results);
              this.store.movies = response.data.results;
            }) //chiamata andata a buon fine
            .catch((error) => console.log(error));
        },
      },
};

</script>
<template>
      <header class="p-3 text-danger bg-dark">
            <div class="container d-flex justify-content-between">
                <h1>BOOLFLIX</h1>
                <input type="text" class="form-control w-25 " placeholder="Ritorno al futuro" aria-label="Username" aria-describedby="basic-addon1" v-model="store.searchKey"> 
                <button type="button" class="btn btn-primary" @click="searchMovies">Search</button>
            </div>
      </header>      
      
    <main>
         <div class="container">
              <div class=" text-center ">
                <div class="row" >
                    <div class="col-3 bg-primary margin" v-for="movie in store.movies">
                        <h3><strong>Title:</strong>  {{ movie.title }}</h3>
                        <p><strong>Riepilogo:</strong>  {{ movie.overview }}</p>
                        <p v-if="movie.original_language === 'it'  ">
                          <strong>Lingua:</strong> bandiera <img class="ima" :src="ita" alt="italia">
                        </p>
                        <p v-else-if="movie.original_language === 'en'">
                          <strong>Lingua:</strong> bandiera <img class="ima" :src="en" alt="english">
                        </p>
                        <p v-else><strong>Lingua:</strong> {{ movie.original_language }}</p>
                        <p><strong>Voto Stelle:</strong> {{ getVote(movie.vote_average) }}</p>
                        <i v-for="n in getVote(movie.vote_average)" class="fa-solid fa-star" ></i>
                        <i class="fa-regular fa-star" v-for="n in starNumber - getVote(movie.vote_average)"></i>
                        <img :src="imma + misura + movie.poster_path" alt="">
                    </div>
                </div>
             </div>
         </div> 
    </main>
</template> 
<style>
.margin{
    margin: 2.9rem;
}
.ima{
  width: 50px;
}
</style>
