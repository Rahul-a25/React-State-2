import './App.css';
// import Markdowninput from './Components/Markdowninput';
import Input from "./components/Input"
import Result from "./components/Result"
// import Result from './Components/Result';
import { useState } from 'react';

function App() {
  const [input, setinput] = useState("# Markdown Preview")
  return (
    <div className="App">
    <div className='markdown'>
    <Input input={input} setinput={setinput} />
      <Result input={input} setinput={setinput} />
    </div>
      
     
    </div>
  );
}

export default App;