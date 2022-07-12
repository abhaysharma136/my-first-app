
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate,useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from './global';
export function EditMovie() {

    const { id } = useParams();
    // console.log(movieList[id]);
    // const movie = movieList[id];
    const[movie,setMovie]=useState(null)
    const getMovie=()=>{
      fetch(`${API}/movies/${id}`,{
        method:"GET",
      })
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv));
    }
      useEffect(()=> getMovie(),);

  

  

  
  
  return movie?<EditMovieForm movie={movie}/>:"Loading...";
}

function EditMovieForm({movie}){
    const [poster, setPoster] = useState(movie.poster);
  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer,setTrailer] = useState(movie.trailer);

  const navigate=useNavigate();
  const editMovie = () => {
    const updatedMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    //Copy the movieList and add the new movie
    // setMovieList([...movieList, newMovie]);
    // console.log(newMovie);
    fetch(`${API}/movies/${movie.id}`, 
    {method: "PUT",
  body: JSON.stringify(updatedMovie),
  headers: {"Content-Type": "application/json",
},
})
  .then(()=>navigate('/movies'));
  };

    return(
<div className='add-movie-form'>
      <TextField id="standard-basic" value={poster} label="Poster" variant="standard" onChange={(event) => setPoster(event.target.value)} />
      <TextField id="standard-basic" value={name} label="Name" variant="standard" onChange={(event) => setName(event.target.value)} />
      <TextField id="standard-basic" value={rating} label="Rating" variant="standard" onChange={(event) => setRating(event.target.value)} />
      <TextField id="standard-basic" value={summary} label="Summary" variant="standard" onChange={(event) => setSummary(event.target.value)} />
      <TextField id="standard-basic"  value={trailer} label="Trailer" variant="standard" onChange={(event) => setTrailer(event.target.value)} />
      <Button variant="contained" onClick={editMovie}>Save</Button>
    </div>
    )
}



