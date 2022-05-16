import React, { useState } from 'react';
import Formulario from '../components/Formulario'
import Lista from '../components/Lista';
import IInfos from '../types';

function App() {
// try with rendering ul and tables from a STATE
//here its a ARRAY of objects, while in FORMULARIO is a single object that will be inserted in the array.
let [names, setNames] = useState([{
  Model: '',
  Licenseplate: '',
  Entrada: ''
  
}])

  return (
   
    <div className="App">
      <Formulario 
      setNames={setNames}
      names={names}/>
      <Lista names={names}/>
    </div>
  )};
export default App;


