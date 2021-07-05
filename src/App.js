import ChooseCurrency from './components/ChooseCurrency';

import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {

  return (
    <>
      <header className="d-flex justify-content-center py-3">
        <h1 className="alert alert-info">Cotizaciones al Minuto</h1>
      </header>
      <main>
        <ChooseCurrency/>
      </main>
    </>
  );

}

export default App;
