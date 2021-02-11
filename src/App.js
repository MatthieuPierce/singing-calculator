import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';

// import Display from './components/Display';
// import ReactFCCtest from 'react-fcctest';



function App() {
  return (
    <div className="App container-sm" >
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > </a> */}
          <h1 className="display-5">Singing Calculator</h1>
          <p>Uses React, Bootstrap 5, and the Web Audio API oscillator to create audio effects on the fly.</p>
      </header>
      <Calculator />
      {/* <ReactFCCtest /> */}
    </div>
  );
}

export default App;
