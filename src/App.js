import './App.css';
import Calculator from './components/Calculator';
// import ReactFCCtest from 'react-fcctest';



function App() {
  return (
    <div className="App container-sm" >
      <header className="App-header">
          <h1 className="display-5">Singing Calculator</h1>
          <p>Uses React, Bootstrap 5, and the Web Audio API oscillator to create audio effects on the fly.</p>
      </header>
      <Calculator />
      {/* <ReactFCCtest /> */}
    </div>
  );
}

export default App;
