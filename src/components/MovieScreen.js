
import Movies from './Movie';


export default function MovieScreen(){
    
    
    
    return(
        <>
            <div className='chooseMovie'>
                <h2>Selecione o filme</h2>
            </div>
            <div className="movies">
                <Movies/>
            </div>
        </>
    )
}