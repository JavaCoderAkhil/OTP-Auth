import React from 'react'
import LoginPage from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signin' element={<LoginPage />} />
      </Routes>
    </React.Fragment>
  )
}

export default App