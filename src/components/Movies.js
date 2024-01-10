import React from "react";
import { movies } from "../data";

function Movies() {
  return  <div>
            <h1>Movies Page</h1>
            {
              movies.map( (movie,index)=> { 
                return  <div key={index}>
                          <div>Name: {movie.title}</div>
                          <div>Time: {movie.time}</div>
                          <ul>
                          {movie.genres.map((genre,index2)=>
                            {return <li key={index2}>{genre}</li>}
                          )}
                        </ul> 
                        </div>
              })
            }
          </div>;
}

export default Movies;
