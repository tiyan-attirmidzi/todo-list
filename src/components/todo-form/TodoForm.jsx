import React, { useState } from "react"; 
import PropTypes from 'prop-types';
import styles from './todo-form.module.css'

const TodoForm = ({ addTodo, showAdd }) => {

    const [value, setValue] = useState("");
    const handleFormSubmit = e => {
        e.preventDefault();
        if (!value) {
            alert("Silahkan isi inputan anda!");
            return;
        }
        if (value.length > 40) {
            alert("Inputan melebihi 40 karakter");
            return;
        }
        addTodo(value);
        setValue("");
    }
    
    if (showAdd) {
        return (
            <section className={ styles.add }>
                <form className={ styles.addForm } onSubmit={ handleFormSubmit }>
                    <input type="text" className={ styles.addInput } value={ value } onChange={ e => setValue(e.target.value) } />
                    <button className={ styles.addBtn }>Enter</button>
                </form>
            </section>
        );
    } else {
        return null;
    }

}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
}

export default TodoForm;