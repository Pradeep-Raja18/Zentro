import About from './Pages/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
    <BrowserRouter basename='/Zentro'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
