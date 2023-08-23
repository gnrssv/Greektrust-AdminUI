import logo from './logo.svg';
import './Renderer.css';
import Hsect from "./components/Homepage";
import * as React from "react";

function Application() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
function App(){
  return (
    <div className = "App">
      <Hsect/>
    </div>
  );
}
function Render() {
  return(
    <section>
      <div className = "employee">
         
      </div>
    </section>
  );
}
export default App;
