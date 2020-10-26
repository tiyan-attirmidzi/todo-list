import React from "react";
import Todo from "./Todo";

const Todos = () => {
    const todos = [
        {
            text: "Belajar React"
        },
        {
            text: "Belajar React Native"
        },
        {
            text: "Belajar Express JS"
        },
        {
            text: "Belajar MongoDB"
        },
        {
            text: "Belajar Python"
        },
        {
            text: "Belajar TensorFlow"
        },
        {
            text: "Belajar Golang"
        },
        {
            text: "Belajar NodeJS"
        },
        {
            text: "Belajar NextJS"
        },
        {
            text: "Belajar Vue"
        },
    ];
    return (
        <section className="todos">
            {
                todos.map(todo => {
                    return <Todo text={todo.text}/>
                })
            }
        </section>
    );
}

export default Todos;