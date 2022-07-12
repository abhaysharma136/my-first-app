import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Counter } from './Counter';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActions } from '@mui/material';

export function Movie({ movie, id,deleteButton,editButton }) {
  const styles = {
    color: movie.rating > 8 ? 'green' : 'red',
  };
  const [show, setShow] = useState(true);
  const paraStyles = {
    display: show ? 'block' : 'none'
  };
  const navigate = useNavigate();

  return (
    <div>
      <Card className='movie-container'>
        <img src={movie.poster} alt={movie.name} className='movie-poster'></img>
        <CardContent>
        <div className='movie-specs'>
          <h2 className='movie-name'>{movie.name}<IconButton color="primary" aria-label="see info about movie" onClick={() => navigate(`/movies${id}`)}>

            <InfoIcon />
          </IconButton>

            <IconButton aria-label="toggle-summary" onClick={() => setShow(!show)}>
              {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton></h2>

          <p style={styles} className='movie-rating'>{movie.rating}⭐</p>
        </div>
        <p style={paraStyles} className='movie-summary'> {movie.summary}</p>
        </CardContent>
        <CardActions> 
          <Counter />{deleteButton}{editButton}
          </CardActions>
       
      </Card>
      

    </div>


  );
}
