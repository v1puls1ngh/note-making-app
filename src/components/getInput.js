import React from 'react';
import './getInput.css';

const GetInput = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className="note-form">
            <textarea
             name='note'
             value={props.input}
             onChange={props.handleChange}
            >
                {/* {props.input.note} */}
            </textarea>     
            <br/>
            <button type='submit'>+</button>
        </form>
    )
}

export default GetInput;

