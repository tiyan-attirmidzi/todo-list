import React from "react"; 
import PropTypes from 'prop-types';
// import styles from './todoForm.module.css'
import * as styles from './todoForm.styles';
import { useTheme } from 'emotion-theming';

const TodoForm = ({ addTodo, showAdd }) => {

    const theme = useTheme();
    const [value, setValue] = React.useState("");
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
            <section css={ styles.add }>
                <form css={ styles.addForm } onSubmit={ handleFormSubmit }>
                    <input type="text" css={ styles.addInput({ theme }) } value={ value } onChange={ e => setValue(e.target.value) } />
                    <button css={ styles.addBtn({ theme }) }>Enter</button>
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