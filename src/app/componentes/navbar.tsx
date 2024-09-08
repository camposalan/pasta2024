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
        <Link className="text-blue-200 font-bold" href="/altas">Filmes</Link>
        <Link className="text-blue-200 font-bold" href="https://cardapioreplay-line.vercel.app">Cardapio</Link>
        <Link className="text-blue-200 font-bold" href="https://exemploreact.vercel.app">Api</Link>
        <Link className="text-blue-200 font-bold" href="/moveis">Móveis</Link>
    

     
       

      </nav>
    )


}