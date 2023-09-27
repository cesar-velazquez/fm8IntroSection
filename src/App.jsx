import { Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import PublicRoutes from './Validation/PublicRoutes'
import { useState } from 'react'
import Inicio from './Pages/Inicio'
import PrivateRoutes from './Validation/PrivateRoutes'
import Welcome from './Pages/Welcome'
import Page404 from './Pages/Page404'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  const [userLogged, setUserLogged] = useState(false)

  return (
    <main className='bg-AlmostWhite min-h-screen font-Epilogue
    sm:max-w-[1200px] sm:m-auto '>
      {/* <Header />
      <Body /> */}

      <Routes>
        <Route path='/' element={<Inicio/>} />

        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />

        {/* <Route element={<PublicRoutes userLogged={userLogged} />} >
          <Route path='/' element={<Login
            userLogged={userLogged}
            setUserLogged={setUserLogged}
          />}
          />
        </Route> */}

        <Route element={<PrivateRoutes userLogged={userLogged} />} >
          <Route path='/' element={<Welcome setUserLogged={setUserLogged}
          />}
          />
        </Route>

        <Route path='*' element={<Page404 />} />
      </Routes>
    </main>
  )
}

export default App
