import React from 'react'
import { Route, Routes } from 'react-router'
import SignIn from './pages/register/SignIn'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App