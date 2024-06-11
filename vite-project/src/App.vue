
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
      this.store.apiInfo.Url + this.store.apiInfo.endpoints.movies + '? api_key =';

      axios
      .get(url, {
            params: {
                api_key: this.store.apiInfo.key,
                ritorno: this.store.apiInfo.query,
                language: this.store.languageKey,
                query: this.store.search,
              },
            })
            .then((response) => {
              console.log(response.data.results);
              this.store.movies = response.data.results;
            }) 
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
                    <div class="col-3 margin" v-for="movie in store.movies">

                      <div class="card">
                        <img class="poster" :src="imma + misura + movie.poster_path" alt="">
                      

                        <div class="card__content">
                          <h3 class="card__title"><strong>Title:</strong>  {{ movie.title }}</h3>
                          <div class="card__description">
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
                        </div>
                      </div>
                      </div>
                        
                    </div>
                </div>
             </div>
         </div> 
    </main>
</template> 
<style>
.card {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card .poster {
  width: 100%;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
  transform: rotateX(0deg);
  z-index: 5;
}

.card__title {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 700;
}

.card:hover .poster {
  scale: 0;
}

.card__description {
  margin: 10px 0 0;
  font-size: 14px;
  color: #777;
  line-height: 1.4;
}

.margin{
    margin: 2.9rem;
}
.ima{
  width: 50px;
}
</style>
