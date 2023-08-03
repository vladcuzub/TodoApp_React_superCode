import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './Form.css'

const Form = (props) => {
    const [inputTodo, setinputTodo] = useState("");

    const handleInput = (e) => {
        setinputTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            title: inputTodo,
            id: uuidv4(),
            done: false
        };
        props.setTodos((prevTodos) => [...prevTodos, newTodo]);
        setinputTodo("");
    };

    return (
        <>
            <form>
                <label htmlFor="todo">
                    <input
                        type="text"
                        id="todo"
                        name="todo"
                        onChange={handleInput}
                        value={inputTodo}
                        placeholder="Add your To do..."
                    />
                    <button type="submit" onClick={handleSubmit}>
                        <i className="fas fa-plus-square"></i>
                    </button>
                </label>
            </form>
        </>
    );
};
export default Form;
