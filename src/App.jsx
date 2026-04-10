import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navbar } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import AppLayout from './layout/AppLayout'


// 홈페이지
// 영화 전체 보여주는 페이지 (서치)
// 영화 디테일 페이지
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App' >
      <Routes>
        <Route path="/" element={<AppLayout/>}> // user 화면


        </Route>
        
      
      </Routes> 
    </div>
  )
}

export default App
