// import { reactive } from 'vue';

// export const store = reactive({
//     search: ``,
//     results: [],
//     apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=3417576eecb77694258412f75334ff5f&query=ritorno%20al%20futuro&language=it-IT',
// });


import { reactive } from 'vue';

import { apiInfo } from './config/api';
import { searchKey, languageKey } from './config/search';

export const store = reactive({
    movies: [], //array risultati
    searchKey,
    languageKey, //chiave di ricerca
    apiInfo,
});