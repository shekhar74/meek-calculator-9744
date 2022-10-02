import { Box } from '@chakra-ui/react'
import HomePage from './Pages/HomePage';
import ProdutsPage from './Pages/ProdutsPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Description from './Pages/Description';
import CartPage from './Pages/CartPage';
import Login from './Pages/Login';

import {
  Routes,
  Route,
  
} from "react-router-dom";
import axios from 'axios';

function App() {
    
   axios.get('http://localhost:3004/products')
  //  .then(res=>{console.log(res)})

  return (
    <Box  margin='auto' maxW='1200px' 
     className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProdutsPage/>}/>
        <Route path='/products:id' element={<Description/>}/>
        <Route path='/cart' element={<CartPage/>}/>   
        <Route path='/login' element={<Login/>}/>   
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
