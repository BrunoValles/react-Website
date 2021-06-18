import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
    </Router>
  );
}

export default App;
