import './MangaList.css'
const MangaListado = ({dataManga}) => {

    return(
        <>
        <ul className='manga-list'>
            {dataManga.data.map((manga)=>(    
            <li key={manga.id} className='manga-list-individual'>
                <div className='manga-list-individual-img-container'>
                    <img src={manga.attributes.posterImage.original} alt="original" className='manga-list-individual-img'/>
                </div>
                <div className="manga-list-canon-title">
                    <h3>{manga.attributes.canonicalTitle}</h3>
                </div>
            </li>
            ))}
        </ul>
        <div className="btns">
            <button onClick={onPreview}>
                Anterior
            </button>
            <button onClick={onFirst}>
                Primer página
            </button>
            <button onClick={onNext}>
                Siguiente
            </button>
        </div>
        </>
    )
}
export {MangaListado}