import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MovieScreen from '../components/MovieScreen'
import TopBar from '../components/TopBar'
import "../assets/css/reset.css"
import "../assets/css/style.css"
import MoviePage from './MoviePage';

export default function App(){
    return(
        <BrowserRouter>
            <TopBar/>
            <Routes>
                <Route path="/" element={<MovieScreen />}/>
                <Route path="/movie/:movieId/showtimes" element={<MoviePage />}/>
            </Routes>
        </BrowserRouter>
    )
}