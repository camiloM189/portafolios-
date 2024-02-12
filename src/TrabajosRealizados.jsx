import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const TrabajosRealizados = () => {
  const navigate = useNavigate()

  const back = () => {
     navigate('/homePage/quienSoyPage/CuadroDeTecnologias');
}

  return (
  

<>
 <div className="container scroll-container4  mt-5 mb-5 animate__animated animate__rotateInUpRight">
  <h1 className='text-light mb-5'>Trabajos Realizado</h1>
   <section className="row  align-items-lg-center trabajo-realizados">
    
     <article className="col-12 col-md-6 col-lg-6 d-flex calidad" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
       <div className="card mx-auto  mb-3 tarjetaDeTrabajosRealizados" >
         <img src="/calidadIES.jpg" className="card-img-top bg-third-color" alt="..."/>
         <div className="card-body">
          <br />
           <h5 className="card-title">Calidad IES</h5>

    
         </div>
       </div>
     </article>
     <article className="col-12 col-md-6 col-lg-6 d-flex heros"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
       <div className="card mx-auto  mb-3 tarjetaDeTrabajosRealizados" >
         <img src="/Hero-Barf.jpg" className="card-img-top bg-third-color" alt="..."/>
         <div className="card-body">
          <br />
           <h5 className="card-title">Hero's Barf</h5>
         </div>
       </div>
     </article>
     
     
     </section>
</div>

<div class="boton-back me-5  animate__animated animate__flipInX">
    <button className='btn btn-dark boton-back-boton' onClick={back}><i class="bi bi-arrow-up-circle"></i></button>
    </div>
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Hero's Barf</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      es una empresa dedicada a la producción y venta de comida para perros B.A.R.F 
      (Biologically Appropriate Raw Food o Bones and Raw Food). 
      Que se apasiona por el bienestar de los perros y cree que una alimentación natural y saludable es esencial para su calidad de vida.
      <br />
      <img src="/Hero-Barf.jpg" alt=""  className='img-fluid' /> 
      <img src="/hero-barf4.jpg" alt="" className='img-fluid' />
    
      <img src="/hero-barf3.jpg" alt="" className='img-fluid' />
      <img src="/hero-barf2.jpg" alt="" className='img-fluid' />


      
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <a href="https://hero-barf.onrender.com"><button type="button" className='btn btn-primary'>Ver Pagina</button></a>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Calidad IES</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Calidad IES es firma de consultoría y asesoría que tiene su origen 
      en la pasión por la educación y el compromiso con la excelencia académica
      <img src="/calidadIES.jpg" alt=""  className='img-fluid' /> 
      <img src="/calidadIES2.jpg" alt="" className='img-fluid' />
      <img src="/calidadIES3.jpg" alt="" className='img-fluid' />
      <img src="/calidadIES4.jpg" alt="" className='img-fluid' />
      <img src="/calidadIES4_1.jpg" alt="" className='img-fluid' />
      <img src="/loginCalidad.jpg" alt="" className='img-fluid' />

      
      
      <img src="/calidadIES-contactanos.jpg" alt="" className='img-fluid' />
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <a href="https://calidad-ies-front-end.onrender.com"><button className='btn btn-primary'>Ver pagina</button></a>
      </div>
    </div>
  </div>
</div>
</>

  )
}
