






import NavBar from "./componentes/navbar";




export default function Home() {
  const filme1 = {
    poster:"https://media.themoviedb.org/t/p/w220_and_h330_face/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg",
    titulo:"Divertidamente",
    nota:7.9
  }
  const filme2 = {
    
    poster:"https://media.themoviedb.org/t/p/w220_and_h330_face/8mUITts4spdowHo7CEW7aATQ4pE.jpg",
    titulo:"Twister",
    nota:7.9
  }



  return (
    <main className="flex min-h-screen flex-col ">
      <NavBar/>
    

      <header className="relative flex items-center justify-center h-screen overflow-hidden">
      <video autoPlay muted loop className="absolute">
        <source src={'video/alan.mp4'}/>
       
      </video>
      <div className="relative z-30 opacity-70">

       

       
        
    


      </div>

            
     
  

      </header>

    


 
      
     
     
     





    </main>
    
  );
}
