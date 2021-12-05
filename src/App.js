import './App.css';
import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Routes from './routes.js'
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
