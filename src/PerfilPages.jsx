import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const PerfilPages = () => {
      const navigate = useNavigate()

     const handleScroll = () => {
         // Coloca aquí la lógica para manejar el evento de desplazamiento
        //  if(window.scrollY === 508){
        //       navigate('/homepage/quiensoypage')
         
        // }
        if(window.scrollY === 495){
          navigate('/homepage/quiensoypage')
     
    }
       console.log(window.scrollY);
       };
       useEffect(() => {
         window.addEventListener('scroll', handleScroll);
       return () => {
         window.removeEventListener('scroll', handleScroll);
       };
      }, []);
  return (
    <>
     <div className='animate__animated animate__backInDown acomodar'>
     <div className='bg-gradient-blue-green container portafolio scroll-container ' >
    
  <article className='text-light ' >
    <div class="position-absolute top-50 start-50 translate-middle text-center " > 
        <img src="Mesa de trabajo 20_1.png" alt=""  className='img-fluid  ' />
         <h1 className=' ' >Juan Camilo Millan Cuellar</h1>
         <div className='raw'>
            <a href="https://github.com/camiloM189"> 
                <img src="github.png" className='col-2'   alt="github" /></a>
            <a href="mailto:jcamilomillan18912@gmail.com">
                <img src="gmail.png"  className='col-2' alt="gmail" /></a> 
            <a href="https://www.linkedin.com/in/juan-camilo-millan-cuellar-a78088248/">
                <img src="link.png"   className='col-2' alt="link" /></a>   
        </div>
    </div> 

  </article>

  </div>
  </div> 
 
  </>
  )
}
