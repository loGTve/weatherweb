import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages
import WeatherShow from './sub/WeatherShow';
import MainPage from './sub/MainPage';

function App(){
    return(
        <>
        <Router>
            <Route path='/' exact component={MainPage} />
            <Route path='/Weather' component={WeatherShow} />
        </Router>
        </>
    )
}

export default App;