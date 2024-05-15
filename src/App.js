import './App.css';
import Home from './components/Home/home.js';
import Navbar from './components/Navbar/navbar.js'
import Footer from './components/Footer/footer.js';
import { Route, Routes } from 'react-router-dom';
import FavList from './components/FavList/favList.js';

function App() {
  return (
    <div style={{ backgroundColor: '#DC8B7A' }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FavList' element={<FavList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
