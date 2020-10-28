import PropTypes from 'prop-types';
import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, complateTodo }) => {
    return (
        <section className="todos">
            {
                todos.map((todo, index) => {
                    return <Todo key={index} text={todo.text} isComplated={todo.isComplated} complateTodo={complateTodo} index={index}/>
                })
            }
        </section>
    );
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string1
    })),
    complateTodo: PropTypes.func.isRequired
};

export default Todos;