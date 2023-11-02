import React from 'react'
import ReactDOM from 'react-dom/client'

import './style.css'
import { AppRoute } from './routes/AppRoute'
import { BrowserRouter } from 'react-router-dom'
import { QuienSoyPage } from './QuienSoyPage'
import { PerfilPages } from './PerfilPages'
import { CuadroDeTecnologias } from './CuadroDeTecnologias'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <QuienSoyPage/> */}
    {/* <CuadroDeTecnologias/> */}
     <BrowserRouter>
      <AppRoute />
    </BrowserRouter> 
  </React.StrictMode>,
)
