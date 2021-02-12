import './App.css';
import Calculator from './components/Calculator';
// import ReactFCCtest from 'react-fcctest';



function App() {
  return (
    <div className="App container-sm" >
      <header className="App-header">
          <h1 className="display-6">Singing Calculator</h1>
      </header>
      <Calculator />
      {/* <ReactFCCtest /> */}
      <p>Uses React, Bootstrap 5, and the Web Audio API to create oscillator effects on the fly.</p>
    </div>
  );
}

export default App;
