import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const TrabajosRealizados = () => {
  const navigate = useNavigate()

  const handleScroll = () => {
      // Coloca aquí la lógica para manejar el evento de desplazamiento
      if(window.scrollY <= 954){
      navigate('/homepage/quiensoypage/CuadroDeTecnologias');
           
      
     }
     if(window.scrollY <= 465){
      // navigate('/homepage/quiensoypage');
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
    <main className="pt-5 animate__animated animate__rotateInUpRight " href="index.html">
     <div className="container scroll-container4 ">
       <section className="row min-vh-100 align-items-lg-center trabajo-realizados">
         <article className="col-12 col-md-6 col-lg-6 d-flex">
           <div className="card mx-auto  mb-3 tarjetaDeTrabajosRealizados" >
             <img src="/calidadIES.jpg" className="card-img-top bg-third-color" alt="..."/>
             <div className="card-body">
              <br />
               <h5 className="card-title">Calidad IES</h5>
               <a href="https://calidad-ies-front-end.onrender.com"><button className='btn btn-primary'>Mas detalles</button></a>
             
             </div>
           </div>
         </article>
         <article className="col-12 col-md-6 col-lg-6 d-flex">
           <div className="card mx-auto  mb-3 tarjetaDeTrabajosRealizados" >
             <img src="/Hero-Barf.jpg" className="card-img-top bg-third-color" alt="..."/>
             <div className="card-body">
              <br />
               <h5 className="card-title">Hero's Barf</h5>
               <a href="https://hero-barf.onrender.com"><button className='btn btn-primary'>Mas detalles</button></a>
             
             </div>
           </div>
         </article>
         {/* <article className="col-12 col-md-6 col-lg-4 d-flex">
           <div className="card mx-auto  mb-3 tarjetaDeTrabajosRealizados" >
             <img src="/calidadIES.jpg" className="card-img-top bg-third-color" alt="..."/>
             <div className="card-body">
              <br />
               <h5 className="card-title">Calidad IES</h5>
               <a href="https://calidad-ies-front-end.onrender.com"><button className='btn btn-primary'>Mas detalles</button></a>
             
             </div>
           </div>
         </article> */}
         </section>
</div>
</main>  
  )
}
