import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const CuadroDeTecnologias = () => {

  const navigate = useNavigate()

  const handleScroll = () => {
      // Coloca aquí la lógica para manejar el evento de desplazamiento
      if(window.scrollY === 1254){
      navigate('/homepage/quiensoypage/cuadrodetecnologias/trabajosrealizados');
           
      
     }
     if(window.scrollY <= 465){
      navigate('/homepage/quiensoypage');
      // window.scrollTo(508);
  
  
     }
  
    };
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
   }, []);

  return (
    <div className='bg-gradient-blue-green container portafolio scroll-container3 ' >

  
    <div className='row iconosframwork  animate__animated animate__backInDown'>
    
    <img src="/html.png" alt="html" className='img-fluid  col-lg-4  col-6 html1'/>
    <img src="/react.png" alt="react" className='img-fluid  col-lg-4 col-6 html1'/>
    <img src="/js.png" alt="js"  className='img-fluid  col-lg-4 col-6 html1'/>
    <img src="/css.png" alt="css"  className='img-fluid  col-lg-4 col-6 html1'/>
    <img src="/redux.png" alt="redux"  className='img-fluid  col-lg-4 col-6 html1'/>
    <img src="/boostrap.png" alt="boostrap"  className='img-fluid  col-lg-4 col-6 html1'/>
    </div>
    </div>
  )
}
