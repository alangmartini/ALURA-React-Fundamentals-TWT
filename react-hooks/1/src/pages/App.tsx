import React, { useState } from 'react';
import Formulario from '../components/Formulario'
import Lista from '../components/Lista';
import IInfos from '../types/Infos';
import style from './style.module.scss'

function App() {
// try with rendering ul and tables from a STATE
//here its a ARRAY of objects, while in FORMULARIO is a single object that will be inserted in the array.
let [names, setNames] = useState<IInfos[]>([])
let [selecionado, setSelecionado] = useState<IInfos>()

function selecionaTarefa(itemSelecionado: IInfos){
  setSelecionado(itemSelecionado);
  setNames(prevValue => prevValue.map(item => ({
    ...item,
    Selecionado: itemSelecionado.Id === item.Id ? true : false
  })))


}

  return (
   
    <div className={style.App}>
      <Formulario 
      setNames={setNames}
     />
      <Lista
        setNames={setNames}
        names={names}
        selecionaTarefa={selecionaTarefa}
        />
    </div>
  )};
export default App;
// on click i have to pick a copie of all the info the clicked item
// and pass it to selecionado. Then i compare
//the ID of the selecionado item and of each item in the array.
