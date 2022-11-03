import { Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     <Route path='/' exact component={Home} />
     <Route path='/contact' component={Contact} />
     <Footer />
    </div>
  );
}

export default App;
