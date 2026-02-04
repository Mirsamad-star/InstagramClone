import React from 'react'
import { Route, Routes } from 'react-router'
import SignUp from './pages/register/SignUp.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
    </Routes>
  )
}

export default App
