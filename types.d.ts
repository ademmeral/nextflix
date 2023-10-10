type Category = {
  id: number,
  name: Uppercase<string>
}
type Categories = {
  genres : Category[]
}

type Movie = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}
type Movies = {
  page : number,
  results : Movie[]
}

type Serie = {
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  overview: string,
  popularity: number,
  poster_path: string,
  first_air_date : string,
  name: string,
  origin_country: [string],
  original_name: string,
  vote_average: number,
  vote_count: number,

}
type Series = {
  page : number,
  results : Serie[]
}


type SingleItemType = {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string,
  },
  budget: string,
  genres: { id: number, name: string }[],
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  overview: string,
  original_title: string,
  popularity: number,
  poster_path: string,
  production_companies:
  {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string,
  }[],
  production_countries: { [key:string]: string, name: string }[]
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: { 
    english_name: string, 
    [key:string]: string, 
    name:string 
  }[]
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_count: number,
  vote_average: number,
}
