import React from 'react';
import './renderInput.css';

const RenderInputs = (props) => {
    return(
        <div className="note-container">
            <h3 className="note-item">
                {props.note}
            </h3>
        </div>
    )
}

export default RenderInputs;