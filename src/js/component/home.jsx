import React, { useState } from "react";
import AddToDo from "./addToDo";
import ToDo from "./toDo";


const Home = () => {
    const [toDo, setToDo] = useState([]);
    const [input, setInput] = useState("");
    const newTask = (e) => {
        setInput(e.target.value)
    }
    const sendData = (e) => {
        e.preventDefault()
		if (!input.trim()) return;
        setToDo([...toDo, input])
        setInput("")
    }

    return (
        <>
            <h1 className="text-light mt-3">Tareas pendientes</h1>
            <AddToDo input={input} newTask={newTask} sendData={sendData} />
            <ul className="list-group" onClick={(e) => {
                if (e.target.matches(".fa-trash")) {
                    e.target.parentElement.parentElement.remove();
                }
            }}>
                <ToDo toDo={toDo} />
            </ul>
        </>
    )
}


export default Home;