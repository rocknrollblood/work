'use strict';

let numberOfFilms;

function start() {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

      while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){

      }
}

start();

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

}

function rememberMyFilms() {
      for(let i = 0; i<2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?',''),
                  b = prompt('На сколько оцените его?','',);
      
            if(a != null && b != null && a !='' && b !='' && a.length <50) {
      
      personalMoviesDB.movies[a] = b;
      personalMoviesDB.movies[c] = d; 
            personalMovieDB.movies[a] = b;
            console.log('done');
            } else {
                  console.log('error');
                  i--;
            }   
 
}

rememberMyFilms();


function detectPersonalLevel() {
            console.log(personalMoviesDB); 
      if(personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
      } else if(personalMovieDB.count >=10 && personalMovieDB.count <30){
            console.log('Вы классический зритель'); 
      }else if(personalMovieDB.count >=30){
            console.log('Вы киноман');
      }else{
            console.log('Произошла ошибка');
      }

}

detectPersonalLevel();


function showMyDB (hidden){
      if(!hidden) { 
      console.log(personalMovieDB);

      }

}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
      for(let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
      }
}

writeYourGenres();