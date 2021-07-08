import React, {useState} from "react";
import "./App.css";
import UserData from "./UserData";
import AddUserData from "./AddUserData";

interface tableType{
    border : string;
    borderCollapse : string;
}

const table: any = {
    border : "1px solid #000000",
    borderCollapse : "collapse"
}

export interface myType{
    name : string;
    age : number;
    job : string;
    language? : string
}

const User: React.FC = () =>{

    const objData: myType[] = [
        {
            name : "Mark",
            age : 26,
            job : "Web Developer",
            language : "JavaScript"
        },
        {
            name : "John",
            age : 24,
            job : "UX Designer",
            language : "Figma"
        }
    ];

    console.log(objData);

    const[person, setPerson] = useState<myType[]>(
        [
            {
                name : "Mark",
                age : 26,
                job : "Web Developer",
                language : "JavaScript"
            },
            {
                name : "John",
                age : 24,
                job : "UX Designer",
                language : "Figma"
            }
        ]
    );

    console.log(person);

    person.map(person => console.log(person));

    return(
        <div className="user">
            <table style={{width:"100%"}}>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Job</th>
                    <th>Language</th>
                </tr>
                <UserData person={person} />
            </table>
            <AddUserData person={person} setUser={setPerson} />
        </div>
    )
};

export default User;