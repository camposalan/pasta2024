import { Bookmark, BookmarkCheck, Star } from "lucide-react"

interface Cardprops{
    filme: {
        poster: string,
        titulo: string,
        nota: number

    }
}

export default function Card({filme}:Cardprops){
    return(
        <div  className="flex flex-col items-center w-40 gap-2 relative">
            <Bookmark className="absolute right-2 top-2 cursor-pointer text-white" />
            <BookmarkCheck className="absolute right-2 top-2 cursor-pointer text-amber-300" />
            
                <img className="rounded-lg" src={filme.poster} alt="poster do filme"/>
                <span className="text-lg font-medium line-clamp-1">
                    {filme.titulo}
                    </span>
            
            <div className="flex items-center gap-2">
                <Star className="text-amber-400"/>
                <span className="opacity-80">{filme.nota}</span>

            </div>
            <a href="" className="bg-blue-500 py-1 px-6 rounded">
                detalhes

            </a>
        </div>
    )
}