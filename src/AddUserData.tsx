import React, { useState } from "react";
import {myType as myData} from "./User";

interface Idata{
    name : string;
    id? : number;
}

interface userData{
    name : string;
    age :  string;
    job : string;
    language : string;
}

interface Iprops{
    person : {
        name : string;
        age : number;
        job : string;
        language? : string;
    }[]
    setUser : React.Dispatch<React.SetStateAction<myData[]>>
}

const AddUserData: React.FC<Iprops> = ({person, setUser}) =>{
    console.log(person);
    console.log(setUser);

    const[userData, setUserData] = useState<userData>({
        name : "",
        age : "",
        job : "",
        language : ""
    });

    const[allEntry, setAllEntry] = useState<userData[]>([]);

    console.log(userData);

    const{name, age, job, language} = userData;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>{
        console.log(event.target.name);
        console.log(event.target.value);
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>): void =>{
        event.preventDefault();
        if(!name || !age || !job || !language){
            alert("Submit the details properly");
        }
        else{
            console.log("This is username", name);
            const newEntry = {name, age, job, language};
            console.log("This is newEntry data", newEntry);
            setAllEntry([...allEntry, newEntry]);
            console.log("This is allEntry data", allEntry);
            setUser([...person, {name, age: parseInt(userData.age), job, language}])
            setUserData({
                name : "",
                age : "",
                job : "",
                language : ""
            });
        }
    };

    return(
        <div className="add-user-data" style={{marginTop:"20px"}}>
            <h2 style={{textAlign:"center"}}>Add New Users</h2>
            <form style={{display:"flex", flexDirection:"column"}}>
                <input type="text" onChange={handleChange} placeholder="name" name="name" value={userData.name} />
                <input type="number" onChange={handleChange} placeholder="age" name="age" value={userData.age} />
                <input type="text" onChange={handleChange} placeholder="job" name="job" value={userData.job} />
                <input type="text" onChange={handleChange} placeholder="language" name="language" value={userData.language} />
            </form>
            <button onClick={handleSubmit}>Add User</button>
        </div>
    )
};

export default AddUserData;