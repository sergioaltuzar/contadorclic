import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import sergioAltuzarLogo from './imagenes/logo-sergio-altuzar.png';
import { useState } from 'react';

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }
  return (
    <div className="App">
      <div className='logo-contenedor' >
      <img 
        className='sergio-logo'
        src={sergioAltuzarLogo}
        alt='logo sergio'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />

        <Boton
        texto='Clic'
        esBotonDeClic={true} 
        manejarClic={manejarClic} />

        <Boton
         texto='Reiniciar'
         esBotonDeClic={false} 
         manejarClic={reiniciarContador} />

      </div>
    </div>
  );
}

export default App;
