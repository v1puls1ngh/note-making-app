import React from 'react';
import './renderInput.css';

const RenderInputs = (props) => {
    return(
        <div className="note-container">
            <h3 className="note-item">
                {props.noteItem.note}
            </h3>
            <div className="buttons">
            <button className="delete-button" onClick={()=> props.handleDelete(props.noteItem.id)}>Delete</button>
            <button className="edit-button" onClick={() => props.handleEdit(props.noteItem.id)}>Edit</button>
            </div>
        </div>
    )
}

export default RenderInputs;