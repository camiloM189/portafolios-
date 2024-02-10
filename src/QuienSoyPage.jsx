import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const QuienSoyPage = () => {
     const navigate = useNavigate()

  //   const handleScroll = () => {
  
  //     if(window.scrollY === 0){
  //         navigate('/homePage')
     
  //   }
  //    if(window.scrollY === 865){
    
    
  //      navigate('/homePage/quienSoyPage/CuadroDeTecnologias')

  //    }
  //  };
    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
    //  return () => {
    //    window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);

    const descargarCurriculum = async() => {
        const response = await fetch('/curriculum.pdf');
        const blob = await response.blob();
    
        const link = document.createElement('a');
    
        link.href = URL.createObjectURL(blob);
    
        link.download = `curriculum.pdf`;
    
    
        link.click();
      }


    const next = () => {
        navigate('/homePage/quienSoyPage/CuadroDeTecnologias');
    }
    const back = () => {
      navigate('/homePage');
  }




  return (
    <>
     <div className='bg-gradient-blue-green container portafolio scroll-container2 ' >
     <div className=''>
     <article className='text-light'>
  
       <div class="position-absolute top-50 start-50 quienSoyPage translate-middle ">
     <h2 className='mb-3  animate__animated animate__backInDown'>¿Quien Soy?</h2>

     <p className='justificarTexto animate__animated animate__backInDown '>
     Soy un diseñador gráfico con sólidas habilidades
     en Illustrator y Photoshop. Mi creatividad se 
     combina con un aprendizaje rápido, responsabilidad y 
     dedicación, lo que me impulsa a buscar la excelencia 
     en cada tarea que emprendo.</p>

       <p className=''>

       </p>
      
        <p className='mt-2 justificarTexto mb-2  animate__animated animate__backInDown'>
         Además, tengo experiencia como desarrollador
         Front-End junior, donde he trabajado con frameworks como React,
          Redux Toolking y React-Router. También cuento con conocimientos 
          en el uso de bibliotecas de diseño, incluyendo Bootstrap. 
          Mi pasión por el diseño y el desarrollo web me motiva a ofrecer 
          soluciones de calidad en cada proyecto que abordo.</p>
     <div className='ms-1'>

     <button className='btn btn-primary  animate__animated animate__backInDown' onClick={descargarCurriculum}>Curriculum</button>

   
     </div>
     </div>
     </article>
   
     </div>
     </div>

     <div class="boton-back me-5  animate__animated  animate__flipInX">
    <button className='btn btn-dark boton-back-boton' onClick={back}><i class="bi bi-arrow-up-circle"></i></button>
    </div>
    <div class="boton-next me-5  animate__animated animate__flipInX">
    <button className='btn btn-dark boton-next-boton' onClick={next}><i class="bi bi-arrow-down-circle"></i></button>
    </div>
    </>
  )
}
