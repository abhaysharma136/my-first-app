import { Movie } from "./Movie";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { API } from "./global";
export function MovieList( ) {

  const[movieList,setMovieList]=useState([])
const getMovies=()=>{
  fetch(`${API}/movies`,{
    method:"GET",
  })
.then((data)=>data.json())
.then((mvs)=>setMovieList(mvs));
}
  useEffect(()=> getMovies(), []);

  const deleteMovie=(id)=>{
    fetch(`${API}/movies/${id}`,{
      method:'DELETE',
    })
.then(()=>getMovies());
  }

  const navigate=useNavigate();

  return (
    <div>

      <div className='movie-list'>
        {movieList.map((mv) => <Movie movie={mv} index={mv.id} id={mv.id} 
        deleteButton={<button onClick={()=>{
         deleteMovie(mv.id)
        }}>Delete</button>}
        editButton={<button onClick={()=>{
          navigate(`/movies/edit/${mv.id}`)
         }}>Edit</button>}
        />
        )}
      </div>
    </div>


  );

}
