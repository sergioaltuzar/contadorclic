import './App.css';
import sergioAltuzarLogo from './imagenes/logo-sergio-altuzar.png';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor' >
      <img 
        className='sergio-logo'
        src={sergioAltuzarLogo}
        alt='logo sergio'/>
      </div>
    </div>
  );
}

export default App;
