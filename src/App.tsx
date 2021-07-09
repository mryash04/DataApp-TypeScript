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
      <h2 style={{textAlign:"center"}}>User Data Details</h2>
      <User />
    </div>
  )
};

export default App;
