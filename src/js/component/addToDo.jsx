import React from "react";

const AddToDo = ({input, newTask, sendData}) => {

    return (
        <form onSubmit={sendData}>
            <input className="addToDo my-4 me-3 rounded" type="text" placeholder="Agregar tarea" value={input} onChange={newTask} />
            <button type="submit" className="btn btn-primary">Añadir tarea</button>
        </form>
    )
}

export default AddToDo;