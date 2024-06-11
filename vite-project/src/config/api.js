/*
 API
*/
export const apiInfo = {
  baseUrl: 'https://api.themoviedb.org/3', //indirizzo api themoviedb
  key: '3417576eecb77694258412f75334ff5f', //chiave autenticazione themoviedb
  endpoints: {
    movies: '/search/movie',
    tvs: '/search/tv',
    query: '&query=ritorno%20al%20futuro',
    genre: '/genre/movie/list',
  },
};
