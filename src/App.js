import logo from './assests/images/logo.svg';
import './assests/css/App.css';

//importar componente

import Header from './componentes/Header';
import Footer from './componentes/Footer';
// import Prueba from './componentes/Prueba';
// import Peliculas from './componentes/Peliculas';
import Router from './Router';



// App.use(cors()) // Use this after the variable declaration




function App() {

  return (
    <div className="App">

      <Header />

      {/* <Peliculas  /> */}
      <Router />
      <div className='clearfix'></div>

      <Footer />
    </div>


  );
}

export default App;
