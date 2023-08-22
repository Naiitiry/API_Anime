import './MangaList.css'
const MangaListado = ({dataManga}) => {

    return(
        <>
        <ul className='manga-list'>
            {dataManga.data.map((manga)=>(    
            <li key={manga.id}>
                <img src={manga.attributes.posterImage.original} alt="original" />
                <div className="manga-list-description">
                    <p>{manga.attributes.canonicalTitle}</p>
                </div>
            </li>
            ))}
        </ul>
        <div className="btns">
            <button>
                anterior
            </button>
            <button>
                siguiente
            </button>
        </div>
        </>
    )
}
export {MangaListado}