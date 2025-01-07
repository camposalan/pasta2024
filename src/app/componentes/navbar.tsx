import { Film } from "lucide-react"
import Link from "next/link"

export default function NavBar(){
    return(
        <nav className="flex justify-between bg-slate-800 w-full p-4 flex-wrap ">
        <div className="flex gap-2 items-center flex-wrap" >
           <Film className="text-amber-400" size={28}/>
           <Link href="/">
            <h1 className="text-amber-400 text-2xl font-bold uppercase flex-wrap">Alan Campos</h1>
           </Link>
          
        </div>
        <Link className="text-blue-200 font-bold" href="https://sobremim-kappa.vercel.app/">Sobre</Link>
        <Link className="text-blue-200 font-bold" href="/altas">PHP</Link>
        <Link className="text-blue-200 font-bold" href="https://cardapioreplay-line.vercel.app">Cardapio</Link>
        <Link className="text-blue-200 font-bold" href="https://exemploreact.vercel.app">Exemplos Uso React</Link>
        <Link className="text-blue-200 font-bold" href="https://filmesreact.vercel.app">Filmes</Link>
        <Link className="text-blue-200 font-bold" href="https://coruscating-rugelach-b1ab13.netlify.app/pages/home/index.html">Certificados</Link>
    

     
       

      </nav>
    )


}