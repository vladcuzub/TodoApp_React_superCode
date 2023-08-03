import React from "react";
import { useState } from "react";
import './Todoitem.css'

const TodoItem = (props) => {
 const [deleted, setDeleted] = useState(false);
 const [completed, setCompleted] = useState(false);

 const handleDelete = () => {
     setDeleted(true);
 };
  const handleComplete = () => {
      setCompleted(!completed); 
  };

 if (deleted) {
     return null; 
 }


  
    return (
        <>
            <li className={completed ? "completed" : ""}>
                {props.title}
                <button>
                    <i className="fas fa-check" onClick={handleComplete}></i>
                </button>
                <button className="trash-btn" onClick={handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        </>
    );
   
};
export default TodoItem;
