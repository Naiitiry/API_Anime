import './App.css'
import {WindowsManga} from './components/Manga.jsx'

function App() {

  return (
    <div className="principal-page">
      <h1 className="principal-title">Anime y Manga</h1>
      <div className="principal-choice">
        <WindowsManga/>
      </div>
    </div>
  )
}

export {App}
