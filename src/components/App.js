import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MovieScreen from '../components/MovieScreen'
import TopBar from '../components/TopBar'
import "../assets/css/reset.css"
import "../assets/css/style.css"

export default function App(){
    return(
        <BrowserRouter>
            <TopBar/>
            <Routes>
                <Route path="/" element={<MovieScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}