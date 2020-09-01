import React from 'react';
import './renderInput.css';

const RenderInputs = (props) => {
    return(
        <div className="note-container">
            <h3 className="note-item">
                {props.note}
            </h3>
            <button onClick={()=> props.handleDelete(props.id)}>Delete</button>
        </div>
    )
}

export default RenderInputs;