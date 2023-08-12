import Home from './pages/Home';
import JobListings from './pages/JobListings';
import Employers from './pages/Employers';
import NavigationBar from './components/NavigationBar';
import {Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  

  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/joblistings" element={<JobListings/>}/>
        <Route path="/employers" element={<Employers/>}/>
      </Routes>
    </div>
  )
}

export default App
