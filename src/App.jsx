import { useState } from 'react'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BaseLayout from './layout/BaseLayout'
import { Dashboard, PageNotFound } from './screens'
import ComingSoon from './screens/ComingSoon'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<BaseLayout/>}>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
            <Route path='/coming-soon' element={<ComingSoon/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
