import React from "react";
import { Badge } from "react-bootstrap";
import './MovieCard.style.css';
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({movie}) => {

  const {data:genreData} = useMovieGenreQuery()



  const showGenre=(genreIdList)=>{
    if(!genreData) return []
    const genreNameList=genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id === id)
      return genreObj.name;
    })

    return genreNameList
  }

  return <div
  style={{backgroundImage:"url("+`https://image.tmdb.org/t/p/w300_and_h450_face${movie.poster_path}`+")"}}
  className="movie-card"
  >
    <div className='overlay p-2'>
        <h1>{movie.title}</h1>
        <div>
        {showGenre(movie.genre_ids).map((genre, index)=>(
          <Badge bg="danger" key={index} className="me-1">
            {genre}
          </Badge>
          ))}
          </div>
    
    <div className="mt-2">
          <img src="/IMDB.png" width={20} className="me-1"/>
          <span className="me-2">{movie.vote_average}</span>
          {/* <span className="me-2">{movie.popularity}</span> */}
          {movie.adult? (
            <img src="/over18.png" width={20} className="me-1"/>
          ): (
            <span>'All'</span>
            )}
          </div>
        </div>
    </div>;

};

export default MovieCard;
