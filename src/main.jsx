import React from 'react'
import ReactDOM from 'react-dom/client'

import './style.css'
import './newStyle.css'
import { BrowserRouter } from 'react-router-dom'
import { Portafolios } from './Portafolios'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>

      <Portafolios/> 


    </BrowserRouter> 
  </React.StrictMode>,
)
