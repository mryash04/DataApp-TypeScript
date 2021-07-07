import React from "react";
import "./App.css";

interface Iprops{
    person : {
        name : string;
        age : number;
        job : string;
        language? : string;
    }[]
}

const UserData: React.FC<Iprops> = ({person}) =>{
    console.log(person);
    return(
        <tbody>
            {person.map(person => {
                return <tr>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.job}</td>
                    <td>{person.language}</td>
                </tr>
            })}
        </tbody>
    )
};

export default UserData;