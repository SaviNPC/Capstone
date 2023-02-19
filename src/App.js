
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import {Routes, Route, Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="body1">
        <Header />
        <Nav />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
