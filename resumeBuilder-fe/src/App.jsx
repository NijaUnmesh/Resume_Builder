import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Land from './pages/Land'


function App() {

  return (
    <>
      <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/land" element={<Land />} />
      </Routes>
    </>
  )
}

export default App
