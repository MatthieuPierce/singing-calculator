import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';
// import Display from './components/Display';


function App() {
  return (
    <div className="App container" >
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > </a> */}
          <h1 className="display-5">Singing Calculator</h1>
          <p>Using bog-standard Bootstrap 5 for components.</p>
      </header>
      <Calculator />
    </div>
  );
}

export default App;
