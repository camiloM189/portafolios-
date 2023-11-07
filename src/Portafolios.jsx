import { useEffect } from 'react';
import { useState } from 'react';
import ScrollReveal from 'scrollreveal';
export const Portafolios = () => {

    const descargarCurriculum = async() => {
        const response = await fetch('/curriculum.pdf');
        const blob = await response.blob();
    
        const link = document.createElement('a');
    
        link.href = URL.createObjectURL(blob);
    
        link.download = `curriculum.pdf`;
    
    
        link.click();
      }
      const handleScroll = () => {
        console.log(window.scrollY);
             if(window.scrollY > 200){
                
              const element = document.getElementById('quien-soy');
              const element2 = document.getElementById('curriculum');
              const element3 = document.getElementById('text-1');
              const element4 = document.getElementById('text-2');

              element.classList.remove('d-none');
              element2.classList.remove('d-none');
              element3.classList.remove('d-none');
              element4.classList.remove('d-none');
              

             }
       
             if(window.scrollY >= 627){
              const element = document.getElementById('tecnologias-que-manejo');
              const element2 = document.getElementById('tecnologias');
              element.classList.remove('d-none');
              element2.classList.remove('d-none');
             }
             if(window.scrollY >= 1198){
              const element = document.getElementById('trabajos-realizados');
              element.classList.remove('d-none');

              
             }

             if(window.scrollY === 1625){

             }
            };
            useEffect(() => {
              window.addEventListener('scroll', handleScroll);
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
           }, []);
   


  return (
    <>

       
<div className='animate__animated animate__backInDown acomodar ' >
     <div className='bg-gradient-blue-green container portafolio scroll-container'>
    
  <article className='text-light' >
    <div class="position-absolute top-50 start-50 translate-middle text-center " > 
        <img src="Mesa de trabajo 20_1.png" alt=""  className='img-fluid  ' />
         <h1 className=' ' >Juan Camilo Millan Cuellar</h1>
         <div className='raw'>
            <a href="https://github.com/camiloM189" target="_blank"> 
                <img src="github.png" className='col-2'   alt="github"/></a>
            <a href="mailto:jcamilomillan18912@gmail.com" target="_blank">
                <img src="gmail.png"  className='col-2' alt="gmail" /></a> 
            <a href="https://www.linkedin.com/in/juan-camilo-millan-cuellar-a78088248/" target="_blank">
                <img src="link.png"   className='col-2' alt="link" /></a>   
        </div>
    </div> 

  </article>

  </div>
  </div> 
  
  <div className='bg-gradient-blue-green container portafolio scroll-container2  ' >
     <div className=''>
     <article className='text-light'>
  
       {/* <div class="position-absolute top-50 start-50 quienSoyPage translate-middle portafolio-2 "> */}
       <div class=" quienSoyPage portafolio-2 row fs-5">

     <h2 className='mb-3  animate__animated animate__backInDown d-none quien' id='quien-soy'>¿Quien Soy?</h2>
  
     <p className='justificarTexto animate__animated animate__backInDown d-none quien' id='text-1'>
     Soy un diseñador gráfico con sólidas habilidades
     en Illustrator y <br />
      Photoshop. Mi creatividad se 
     combina con un aprendizaje rápido, <br /> responsabilidad y 
     dedicación, lo que me impulsa a buscar la excelencia 
     en <br />
      cada tarea que emprendo.</p>
  

       <p className=''>

       </p>
      
        <p className='mt-2 justificarTexto mb-2  animate__animated animate__backInDown d-none quien' id='text-2'>
         Además, tengo experiencia como desarrollador
         Front-End junior, donde he <br />
          trabajado con frameworks como React,
          Redux Toolking y React-Router. <br />
           También cuento con conocimientos 
          en el uso de bibliotecas de diseño, <br /> incluyendo Bootstrap. 
          Mi pasión por el diseño y el desarrollo web me <br />
           motiva a ofrecer 
          soluciones de calidad en cada proyecto que abordo.</p>
     <div className='quien mb-5 mt-2'>

     <button className='btn btn-primary  animate__animated animate__backInDown d-none curriculum-botton' id='curriculum' onClick={descargarCurriculum}>Curriculum</button>

   
     </div>
     </div>
     </article>
   
     </div>
     </div>

   
     <div className='bg-gradient-blue-green container portafolio scroll-container3 mb-5 d-none mt-5' id='tecnologias-que-manejo' >
      <h1 className='text-light text-center'>Tecnologias que manejo</h1>
  
    <div className='row iconosframwork  animate__animated animate__backInDown d-none'  id='tecnologias'>
    
    <img src="/html.png" alt="html" className='img-fluid  col-lg-4  col-6 html1'/>
    <img src="/react.png" alt="react" className='img-fluid  col-lg-4 col-6 html1'/>
    <img src="/js.png" alt="js"  className='img-fluid  col-lg-4 col-6 html1'/>
    <img src="/css.png" alt="css"  className='img-fluid  col-lg-4 col-6 html1'/>
    <img src="/redux.png" alt="redux"  className='img-fluid  col-lg-4 col-6 html1'/>
    <img src="/boostrap.png" alt="boostrap"  className='img-fluid  col-lg-4 col-6 html1'/>
    </div>
    </div>

    <div className="container scroll-container4  mt-5 animate__animated animate__rotateInUpRight d-none" id='trabajos-realizados'>
  <h1 className='text-light mb-5'>Trabajos Realizados</h1>
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
