import { useState, useEffect } from 'react';
import axios from 'axios';
import data from '../data/Data'

function Movie() {
    
	const [movies, setMovie] = useState(null);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisicao.then(resposta => {
            setMovie(resposta.data)
		});
	}, []);

    console.log(movies)

	if(movies === null) {
		return <div class="lds-hourglass"></div>;
	}

	
}

export default function Movies(){
    return(
        <>
            <div className='movie'>
                
                <img src='http://images.squarespace-cdn.com/content/v1/501b147ae4b07cab1f91ea20/1581611580496-7084N2PUKSPC2Y8Q1JWD/5DAD1EE5-8A3E-41CC-B28A-F285EB0D3E1E.jpeg' alt='a'/>
                
            </div>
            <div className='movie'>
                
                <img src='http://images.squarespace-cdn.com/content/v1/501b147ae4b07cab1f91ea20/1581611580496-7084N2PUKSPC2Y8Q1JWD/5DAD1EE5-8A3E-41CC-B28A-F285EB0D3E1E.jpeg' alt='a'/>
                
            </div>
            <div className='movie'>
                
                <img src='http://images.squarespace-cdn.com/content/v1/501b147ae4b07cab1f91ea20/1581611580496-7084N2PUKSPC2Y8Q1JWD/5DAD1EE5-8A3E-41CC-B28A-F285EB0D3E1E.jpeg' alt='a'/>
                
            </div>
            <div className='movie'>
                
                <img src='http://images.squarespace-cdn.com/content/v1/501b147ae4b07cab1f91ea20/1581611580496-7084N2PUKSPC2Y8Q1JWD/5DAD1EE5-8A3E-41CC-B28A-F285EB0D3E1E.jpeg' alt='a'/>
                
            </div>
        </>

        
    )
}