import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function MoviePage(){
    const {movieId} = useParams()
    const [movies, setMovie] = useState([])
    const [movie2, setMovie2] = useState([])
    const [times, setTimes] = useState([])


    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`)

        promise.then(response => {
            setMovie(response.data)
            setMovie2(response.data.days)
            setTimes(response.data.days)
        })
    }, [])

    console.log(movies.days)
    console.log(movie2)
    console.log(times)

    return(
    <> 
        <div className='chooseMovie'>
            <h2>Selecione o horário</h2>
        </div>
        <div className='moviePage'>
            {movie2.length === 0 ? <div class="lds-hourglass"></div>:
            movie2.map((movie2) => 
                <div className='sections'>
                    <h4>{movie2.weekday} - {movie2.date}</h4> 
                    <div className='btns'>
                        {movie2.showtimes.map((showtimes)=>(
                            <Link to={`/assentos/${showtimes.id}`}>
                                <button className='btn'>{showtimes.name}</button>
                            </Link>
                        ))} 
                    </div>
            </div>
            )
            } 
        </div>
        <footer className='footer'>
            <div className='divFooter'>
                <img src={movies.posterURL} className='imgFooter'/>
            </div>
            <h4>{movies.title}</h4>
        </footer>
   </>
    )
}
