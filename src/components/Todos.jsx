import PropTypes from 'prop-types';
import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, complateTodo }) => {
    return (
        <section className="todos">
            {
                todos.length > 0 && todos.map((todo, index) => {
                    return <Todo key={index} text={todo.text} isComplated={todo.isComplated} complateTodo={complateTodo} index={index}/>
                })
            }
            {
                todos.length === 0 && (
                    <div className="todo-placeholder-text">
                        Untuk membuat TODO baru silahkann klik tombol {" "} <span className="add-button-placeholder-text">Add</span>
                    </div>
                )
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