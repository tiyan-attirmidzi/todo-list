import React from "react"; 
import PropTypes from 'prop-types';
// import styles from './todoForm.module.css'
import * as styles from './todoForm.styles';
import { useTheme } from 'emotion-theming';
import Button from '../button/Button';
import Container from '../../layouts/Container';
import Item from '../../layouts/Item';

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
            <section className="todoform-component">
                <form onSubmit={ handleFormSubmit }>
                    <Container alignItems="flex-start">
                        <Item flex={1} padding="16px">
                            <input type="text" css={ styles.addInput({ theme }) } value={ value } onChange={ e => setValue(e.target.value) } />
                        </Item>
                        <Item>
                            <Button text="Enter"/>
                        </Item>
                    </Container>
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