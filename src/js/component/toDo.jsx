import React, { useState } from "react";

const ToDo = ({toDo}) => {

    
    
    return (
        <>
            {toDo.map((task, index) =>
                    (<li key={index} className="list-group-item d-flex justify-content-between align-items-center mt-1 rounded border">
                        <span>{task}</span>
                    <span className="ms-2"><i className="fa fa-trash"></i></span>
                    </li>)
                )}
        </>
    )
}

export default ToDo;