import React, {useState} from "react";
import "./App.css";
import User from "./User";

interface userData{
  name : string;
  id?: number;
}

const App: React.FC<userData> = (props) : any =>{

  const[number, setNumber] = useState<(number | string)>(5);

  const changeNumber = () =>{
    if(number == 5){
      setNumber(10);
    }
    else{
      setNumber(5);
    }
  }

  console.log(props);
  return(
    <div className="App">
      <h2>This is from {props["name"]} side</h2>
      <h2>The id is {props["id"]}</h2>
      {number} <br />
      <button onClick={changeNumber}>Submit</button>
      <User />
    </div>
  )
};

export default App;
