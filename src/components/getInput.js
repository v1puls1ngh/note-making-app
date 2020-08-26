import React from 'react';
import './getInput.css';

const GetInput = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className="note-form">
            <textarea
             type='text'
             name='note'
             value={props.input.note}
             onChange={props.handleChange}
             />
            <br/>
             <button type='submit'>+</button>
        </form>
    )
}

export default GetInput;

