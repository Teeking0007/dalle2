import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';



function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collections' element={<CreatePost/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
