import logo from './logo.svg';
import './App.css';
import {Button} from "./button/Button";

export function App() {
  return (
    <div className="App">
      <h1 className="header" style={{backgroundColor: "blue"}}>Header level 1</h1>
      <div>Test div</div>
        <Button/>
    </div>
  );
}

export default App;
