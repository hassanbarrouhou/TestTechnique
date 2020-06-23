import { JsonObject, JsonProperty } from 'json2typescript';

// @JsonObject('MovieSearchAppModel')
// export class MovieSearchAppModel {
//     @JsonProperty('Title', String, true)
//     Title: string;
//     @JsonProperty('Year', String, true)
//     Year: string;
//     @JsonProperty('Released', String, true)
//     Released: string;
//     @JsonProperty('Runtime', String, true)
//     Runtime: string;
//     @JsonProperty('Genre', String, true)
//     Genre: string;
//     @JsonProperty('Director', String, true)
//     Director: string;
//     @JsonProperty('Actors', String, true)
//     Actors: string;
//     @JsonProperty('Poster', String, true)
//     Poster: string;

//     constructor(){
//        this.Title = undefined;
//        this.Year = undefined;
//        this.Released = undefined;
//        this.Runtime = undefined;
//        this.Genre = undefined;
//        this.Director = undefined;
//        this.Actors = undefined;
//        this.Poster = undefined;
//     }

// }

@JsonObject('MovieSearchAppModel')
export class MovieSearchAppModel {
    @JsonProperty('Title', String, true)
    Title: string;
    @JsonProperty('Year', String, true)
    Year: string;
    @JsonProperty('imdbID', String, true)
    imdbID: string;
    @JsonProperty('Type', String, true)
    Type: string;
    @JsonProperty('Poster', String, true)
    Poster: string;

    constructor(){
       this.Title = undefined;
       this.Year = undefined;
       this.imdbID = undefined;
       this.Type = undefined;
       this.Poster = undefined;
    }

}


@JsonObject('SearchModel')
export class SearchModel {
    @JsonProperty('Search', [MovieSearchAppModel], true)
    Search: [MovieSearchAppModel];
    constructor(){
        this.Search = undefined;
    }
}









