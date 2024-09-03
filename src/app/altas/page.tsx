import NavBar from "@/app/componentes/navbar"

import Title from "../componentes/title"
import Card from "../componentes/card"


export default function Altas(){

    const filmes = [
      {
        poster:"https://media.themoviedb.org/t/p/w220_and_h330_face/9h2KgGXSmWigNTn3kQdEFFngj9i.jpg",
        titulo:"Divertidamente",
        nota:7.9
      },
      {
        
        poster:"https://media.themoviedb.org/t/p/w220_and_h330_face/8mUITts4spdowHo7CEW7aATQ4pE.jpg",
        titulo:"Twister",
        nota:7.9
      }


    ] 
   
    
    



    return(
        <main className="flex min-h-screen flex-col items-center justify-between">
            <NavBar/>

            <Title>Filmes em Alta</Title>
     
     

     <section className="flex flex-wrap gap-6 m-4">
       {filmes.map( filme => <Card filme ={filme} ></Card>)}
    


       

     </section>
         
      
       

      
      <h2>Séries em Alta</h2>
     
    </main>
    )
}