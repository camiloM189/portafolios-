import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CuadroDeTecnologias } from '../CuadroDeTecnologias'
import { PerfilPages } from '../PerfilPages'
import { QuienSoyPage } from '../QuienSoyPage'
import { TrabajosRealizados } from '../TrabajosRealizados'

export const AppRoute = () => {
  return (
    <>  
    {/* <div className='bg-gradient-blue-green portafolio container' > */}
 

      <Routes>
           <Route path="/homepage" element={<PerfilPages/>}/>
          <Route path="/homepage/quiensoypage" element={<QuienSoyPage/>}/> 
          <Route path="/homepage/quiensoypage/cuadrodetecnologias" element={<CuadroDeTecnologias/>}/> 
       
          <Route path="/homepage/quiensoypage/cuadrodetecnologias/trabajosrealizados" element={<TrabajosRealizados/>}/> 
          <Route path='/*' element={<Navigate to='/homepage'/>} /> 
          
      </Routes>
      {/* </div> */}
  </>
  )
}
