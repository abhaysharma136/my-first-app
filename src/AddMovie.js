import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as yup from "yup";
import { API } from './global';

const movieValidationSchema=yup.object({
  name: yup.string().required('Why not fill this name?😊'),
      poster: yup.string().required('Why not fill this poster ?😊').min(5,"need a bigger poster"),
      rating: yup.number().required('Why not fill this rating?😊').min(1,"need a better rating").max(10,"too much rating"),
      summary: yup.string().required('Why not fill this summary?😊').min(20,"need a bigger summary"),
      trailer: yup.string().required('Why not fill this trailer?😊').min(5,"need a bigger trailer"),
});

export function AddMovie() {
  
  const navigate=useNavigate();

  const addMovie = (newMovie) => {
    
    //Copy the movieList and add the new movie
    // setMovieList([...movieList, newMovie]);
    // console.log(newMovie);
    fetch(`${API}`, {method: "POST",
  body: JSON.stringify(newMovie),
  headers: {"Content-Type": "application/json",
},
})
  .then(()=>navigate('/movies'));
  };

  const {handleSubmit,values,handleChange,handleBlur,touched,errors}=useFormik({
    initialValues:{
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",},
    validationSchema:movieValidationSchema,
    onSubmit:(newMovie)=>{
      console.log("onSubmit",newMovie);
      addMovie(newMovie);
    }
  });
  return (
    <form onSubmit={handleSubmit} className='add-movie-form'>
      <TextField id="standard-basic" 
       label="Poster"
       variant="standard"
       name="poster"
       value={values.poster}
       onChange={handleChange}
       onBlur={handleBlur} 
       error={errors.poster && touched.poster}
       helperText={errors.poster && touched.poster?errors.poster:""}/>
       
      <TextField id="standard-basic"
       label="Name" 
       variant="standard" 
       name="name"
       value={values.name}
       onChange={handleChange}
       onBlur={handleBlur} 
       error={errors.name && touched.name}
       helperText={errors.name && touched.name?errors.name:""}/>
       
      <TextField id="standard-basic"
       label="Rating" 
       variant="standard" 
       name="rating"
       value={values.rating}
       onChange={handleChange}
       onBlur={handleBlur}
       error={errors.rating && touched.rating}
       helperText={errors.rating && touched.rating?errors.rating:""} />
       
      <TextField id="standard-basic" 
      label="Summary" 
      variant="standard" 
      name="summary"
      value={values.summary}
      onChange={handleChange}
      onBlur={handleBlur} 
      error={errors.summary && touched.summary}
      helperText={errors.summary && touched.summary?errors.summary:""}/>
      
      <TextField id="standard-basic" 
      label="Trailer" 
      variant="standard" 
      name="trailer"
      value={values.trailer}
      onChange={handleChange}
      onBlur={handleBlur} 
      error={errors.trailer && touched.trailer}
      helperText={errors.trailer && touched.trailer?errors.trailer:""}/>
      
      <Button type='submit' variant="contained" onClick={addMovie}>AddMovie</Button>
    </form>
  );
}



