import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import sergioAltuzarLogo from './imagenes/logo-sergio-altuzar.png';

function App() {
  const manejarClic = () => {
    console.log('Clic');
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
        <Contador
            numClics='5' />
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
