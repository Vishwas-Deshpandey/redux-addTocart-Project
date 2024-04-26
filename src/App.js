import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from "./Components/Main";
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
