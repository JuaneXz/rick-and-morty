import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx';
import style from "./App.module.css";
import { useState } from 'react';

function App () {

  const [characters,setCharacters] = useState([]);


const onSearch = (id) =>{
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const KEY = "cf8f9e9ed5c7.99c713383f9b2bb6d8ec";

  fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
  .then(response => response.json())
  .then(data=>{
    if(data.name && !characters.find((char) => char.id === data.id)){
      setCharacters((oldChars) => [...oldChars, data])
      // setCharacters([...characters,data])
    }else{
      alert("algo salio mal")
    }
  })
}
const onClose = (id) => {
  // porque filter.... no modifica el array original
  setCharacters(characters.filter((char) => char.id !== id));
};
  

  return (
    <div className="container" style={{ padding: '25px' }}>
      <div>
      <div className={style.nav}>
        <Nav onSearch={onSearch}/>
      </div>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </div>
  )
}

export default App;

/*const [characters,setCharacters]=userState()


setCharacters([...characters, "Hola"]) */
