import { Route, Routes } from 'react-router-dom';
import Footer from './frontend/components/Footer';
import Home from './frontend/Home';
import Navbar from './frontend/components/Navbar';
import Post from './frontend/Post';

function App() {
  return (
    <div className='whole-container'>

      <Navbar/>
      <div className='space-divider'></div>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/post/:id" element={<Post/>} />
      </Routes>  

      <Footer/>
      
    </div>
  );
}

export default App;
