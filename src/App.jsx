import { useState, useEffect } from 'react'
import theme from "./theme";
import { CardMovies, DropDown } from './components';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import {get} from "./Services"


function App() {
  const [count, setCount] = useState(0)

  const [movies, setMovies] = useState([]);


  async function getMovies(){
    
    const movies = await get();
    setMovies(movies.entries);
    console.log(movies);
  }

  useEffect(()=>{
    getMovies()
  })

  return (
    <div className='container'>
      <CardMovies movies={movies}></CardMovies>
    </div>
  )
}

export default App
