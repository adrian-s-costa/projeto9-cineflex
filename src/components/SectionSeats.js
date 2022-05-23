import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';



export default function SectionSeats(){
    let idSelecSeats = []
    const [movie, setMovie] = useState([])
    const [seats, setSeats] = useState([])
    const { idSessao } = useParams()
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [ids, setIds] = useState([])

    function submitForm(event){
        setIds(idSelecSeats)
        event.preventDefault()
        
        const data = {
            ids: ids,
            name: name,
            cpf: cpf
        }
        console.log(data)
    }
    
    function Selecionar(seat){
        console.log(seat)
        if(seat.selected === false){
            console.log('selecionou')
            console.log(seatsData)
            seat.selected = true
            SelectedSeats()
            
        }else{
            console.log('deselecionou')
            console.log(seatsData)
            seat.selected = false
            SelectedSeats()
            
        }
        
    }
    
    function SelectedSeats(){
        const selecSeats = seatsData.filter((s) => s.selected)
        idSelecSeats = selecSeats.map((i) => i.id) 
        console.log(idSelecSeats)
    }

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        
        promise.then((promise)=>{
            setSeats(promise.data.seats)
            setMovie(promise.data)
        })
    }, [])
    
    let seatsData = seats.map(value => {
        return{
            ...value,
            selected: false,
        }
    })

    return(
        <>
        <div className='sectionSeats'>
            <div className='chooseMovie'>
                <h2>Selecione o(s) assentos</h2>
            </div>
            <div className='seats'>
                {seatsData.map(seat=> {
                    if(seat.isAvailable === false){
                        return <div className='seat y'> {seat.name} </div>
                    }
                    else{
                        return <div className={`seat ${seat.selected ? 'g' : 'gray'}`} onClick={() => Selecionar(seat)}>{seat.name}</div>
                    }
                    
                })}
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
            <form onSubmit={submitForm}>
                <h6>Nome do comprador</h6>
                <input className='input' required type='text' onChange={(e) => setName(e.target.value)} value={name}/>
                <h6>CPF do comprador</h6>
                <input className='input' required onChange={(e) => setCpf(e.target.value)} value={cpf}/>
                <div className='btnSeats'>
                    <Link to={`/sucesso`}>
                        <button className='btnSeatsW' type='submit'> Reservar assentos </button>
                    </Link>
                </div>
            </form>
        </div>
        
        <footer className='footer'>
        {movie.length === 0 ? <div class="lds-hourglass"></div>:
            <>
                <div className='divFooter'>
                    <img src={movie.movie.posterURL} className='imgFooter'/>
                </div>
                <div className='movieInfo'>
                    <h4>{movie.movie.title}</h4>
                    <h4>{movie.day.weekday} - {movie.name}</h4>
                </div>
            </>
        }
        </footer>
    </>
    )
}