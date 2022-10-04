import './App.css';

//navbar code
import Navbar from './components/navBar/navBar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import Scores from './pages/Scores';

function App() {



  return (
    <div className="App">

<Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Scores' element={<Scores/>} />
    </Routes>
    </Router>



           
        </div>
    );
}

export default App;
