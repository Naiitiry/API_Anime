import { useState } from "react";
import { useFetch } from "../../Apilink/useFetch";
import { MangaListado } from "./MangaList.jsx";

const WindowsManga = () =>{
    const {data:mangaData,loading:mangaLoading,error:mangaError} = useFetch(`https://kitsu.io/api/edge/manga/`)
    console.log(mangaData);
    if(mangaLoading){
        return <div>Cargando manga data . . .</div>
    }
    if(mangaError){
        return <div>Error de fetching de manga data: {mangaError.message}</div>
    }
    return(
        <>
            <h2>Mangas</h2>
            <div>
                {mangaData && (
                    <MangaListado dataManga={mangaData}/>
                )}
            </div>
        </>
    )
}
export {WindowsManga}