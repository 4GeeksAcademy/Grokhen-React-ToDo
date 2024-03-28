import React, { useState } from "react";

const ToDo = ({toDo}) => {

    
    
    return (
        <>
            {toDo.map((task, index) =>
                    (<li key={index} className="list-group-item">{task} <span> <i className="fa fa-trash justify-self-end"></i></span></li>)
                )}
        </>
    )
}

export default ToDo;