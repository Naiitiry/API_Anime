import { useFetch } from "../Apilink/useFetch";

const WindowsManga = () =>{
    const {data:mangaData,loading:mangaLoading,error:mangaError} = useFetch(`https://kitsu.io/api/edge/manga`)
    console.log(mangaData.data[0].attributes.abbreviatedTitles[0]);//nombre de la serie
    if(mangaLoading){
        return <div>Cargando manga data . . .</div>
    }
    if(mangaError){
        return <div>Error de fetching de manga data: {mangaError.message}</div>
    }
    return(
        <>
            <h2>Mangas</h2>
            
        </>
    )
}
export {WindowsManga}