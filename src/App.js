import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Hd from './layout/Hd'
import Home from './pages/Home'

export default function App() {
  return (
    <div className='wrap'>
      <Hd></Hd>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={ <p>❗경고❗ 페이지 경로를 확인해주세요.</p> }></Route>
      </Routes>
    </div>
  )
}
