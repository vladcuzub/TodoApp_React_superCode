import React, { useState } from "react";
import './TodoList.css'
import Form from "../Form/Form";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    return (
        <>
            <section>
                <h1>To Do List</h1>
                <Form setTodos={setTodos}></Form>
                <ul>
                    {todos.map((todo) => (
                        <TodoItem
                            title={todo.title}
                            id={todo.id}
                            done={todo.done}
                            key={todo.id}
                        ></TodoItem>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default TodoList;
