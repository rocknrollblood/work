"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat:false
};

const a = prompt('Один из последних просмотренных фильмов?'),
      b = prompt('Нас сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('Нас сколько оцените его?','');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d; 

console.log(personalMoviesDB);