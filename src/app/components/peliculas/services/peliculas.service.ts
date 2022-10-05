import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(public request: HttpClient) { }

  getMovies(){
    return this.request.get("https://api.themoviedb.org/3/trending/all/day?api_key=c9ea8df976c7e86de823d47545f393bf").pipe(
      map(
        (response : any) =>{
          console.log(response)
          return response.results.map( (element: any) => {
            if(element.media_type==="movie"){
              return {
                title: element.title,
                img: "https://image.tmdb.org/t/p/w500/"+element.poster_path,
                banner: "https://image.tmdb.org/t/p/original/"+element.backdrop_path,
                date: element.release_date,
                popularity: element.popularity,
                description: element.overview,
                language: element.original_language,
                calf: element.vote_average,
                id: element.id
              }
            }
            else{
              return {
                title: element.original_name                ,
                img: "https://image.tmdb.org/t/p/w500/"+element.poster_path,
                banner: "https://image.tmdb.org/t/p/original/"+element.backdrop_path,
                date: element.first_air_date,
                popularity: element.popularity,
                description: element.overview,
                language: element.original_language,
                calf: element.vote_average,
                id: element.id
              }
            }
            
          });
        }
      )
    )
  }

  getMoviesTerror(){
    return this.request.get("https://api.themoviedb.org/3/discover/movie?language=es-MX&with_genres=27&api_key=c9ea8df976c7e86de823d47545f393bf").pipe(
      map(
        (response : any) =>{
          console.log(response)
          return response.results.map( (element: any) => {
              return {
                title: element.title,
                img: "https://image.tmdb.org/t/p/w500/"+element.poster_path,
                banner: "https://image.tmdb.org/t/p/original/"+element.backdrop_path,
                date: element.release_date,
                popularity: element.popularity,
                description: element.overview,
                language: element.original_language,
                calf: element.vote_average,
                id: element.id
              }
            
            
            
          });
        }
      )
    )
  }
  
}
