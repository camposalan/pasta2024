import NavBar from "../componentes/navbar"
import { Github } from "lucide-react"


export default function Moveis(){
    return(
        <main>
            <NavBar/>

          
            

            
            <header className="relative flex items-center justify-center h-screen overflow-hidden">
            
                <h2 className=" flex flex-col   bg-slate-500 bold  text-2xl p-10 rounded-2xl">Dispositivos Móveis</h2>
                
                    <p className="text-2xl bg-red-500"> Projeto no Git em breve play store</p>

                <Github />
                <a href="https://github.com/camposalan">Me GitHub</a>
                

            <video autoPlay muted loop className="absolute z-10 w-auto min-w-full min-h-full   opacity-70">
                <source src={'video/fundo.mp4'}/>

            </video>

            
            

           

            </header>

            
           

           

        </main>
    )    
}