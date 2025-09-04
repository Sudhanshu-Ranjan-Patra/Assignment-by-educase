import { useState } from 'react'
import './App.css'
import Home from './component/pages/Home'
import Signin from './component/pages/Signin'
import Signup from './component/pages/Signup'
import Profile from './component/pages/Profile'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App
