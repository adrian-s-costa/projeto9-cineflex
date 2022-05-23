import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function SectionSeats(){
    
    const [movie, setMovie] = useState([])
    const [seats, setSeats] = useState([])
    const { idSessao } = useParams();

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        promise.then((promise)=>{
            setSeats(promise.data.seats)
            setMovie(promise.data)
        })
    }, [])
    console.log(movie)
    return(
        <>
        <div className='sectionSeats'>
            <div className='chooseMovie'>
                <h2>Selecione o(s) assentos</h2>
            </div>
            <div className='seats'>
                {seats.map((seat)=> (
                    <div className='seat'>{seat.name}</div>
                ))}
            </div>
            
            <div className='sub1'>
                <div className='sub'>
                    <div className='seat g'></div>
                    <h5 className='subb'>Selecionado</h5>
                </div>
                <div className='sub'>
                    <div className='seat'></div>
                    <h5 className='subb'>Disponivel</h5>
                </div>
                <div className='sub'>
                    <div className='seat y'></div>
                    <h5 className='subb'>Indisponivel</h5>
                </div>
            </div>

                
        </div>
        <div className='inputs'>
            <h6>Nome do comprador</h6>
            <input className='input'></input>
            <h6>CPF do comprador</h6>
            <input className='input'></input>
        </div>
        <div className='btnSeats'>
                <button className='btnSeatsW'>Reservar assentos</button>
        </div>
        <footer className='footer'>
            <div className='divFooter'>
                <img src={movie.movie.posterURL} className='imgFooter'/>
            </div>
            <div className='movieInfo'>
                <h4>{movie.movie.title}</h4>
                <h4>{movie.day.weekday} - {movie.name}</h4>
            </div>
        </footer>
    </>
    )
}