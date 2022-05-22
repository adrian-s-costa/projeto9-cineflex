import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Movie({id, posterURL}) {
	return(
        <div className='movie'>
            <Link to={`/movie/${id}`}>
                <img src={posterURL}/>
            </Link>
        </div>
    )

}

export default function Movies(){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')

        promise.then((response)=>{
            setMovies([...response.data])
        })
    }, [])
    return(
        <>
        {movies.length === 0 ? <div class="lds-hourglass"></div> : 
            movies.map(movie=> <Movie posterURL={movie.posterURL} id={movie.id}/>)
        }    
        </>
    )
}