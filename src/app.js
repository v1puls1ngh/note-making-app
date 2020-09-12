import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GetInput from './components/getInput.js';
import RenderInputs from './components/renderInput.js';
class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: '',
            noteList: [],
            edit: false,
            editNoteId: undefined
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.sumbitHandler = this.sumbitHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.editHandler = this.editHandler.bind(this);
    }
    // Input Change Handling.
    changeHandler(event){
        this.setState({
          note: event.target.value  
        })
    }
   
    // Handling the sumbission of the inputs by the user.
    sumbitHandler(event){
        
        if ( this.state.edit ) {
            let editNoteItemIndex = this.state.noteList.findIndex(x => x.id === this.state.editNoteId);
            console.log(`${editNoteItemIndex} is from submiteHandler into edit mode`);
            let edittedAndUpdatedNoteList = this.state.noteList;
            console.log(edittedAndUpdatedNoteList);
            edittedAndUpdatedNoteList[editNoteItemIndex].note = this.state.note;
            this.setState({
                note: '',
                noteList: edittedAndUpdatedNoteList,
                edit: false,
                editNoteId: undefined       
            })

        }
        else{
            if (!this.state.note) {
                return;
            }
            this.setState(prevState => {
                const updatedNoteList = [...prevState.noteList, {
                    id: uuidv4(),
                    note: this.state.note
                }]
            return {
                noteList: updatedNoteList,
                note: ''
            }
            })
        }
        event.preventDefault();
    }

    //Handling the deletion of the note.
    deleteHandler(id) {
        console.log(id);
        this.setState((prevState) => {
            const updatedNotes = prevState.noteList.filter(item => item.id !== id);
            console.log(updatedNotes);
            return {
                noteList: updatedNotes
            }
        })
    }

    editHandler(id){
        let editNote = this.state.noteList.filter(x => x.id === id);
        console.log(editNote[0].note);
        this.setState({
            edit: true,
            editNoteId: id,
            note: editNote[0].note
        })
    }

    render() {
        let listOfNotes;
        if (this.state.edit) {
            listOfNotes = this.state.noteList.filter(x => x.id !== this.state.editNoteId).map(item => {
                return <RenderInputs
                         key={item.id}
                          noteItem={item}
                          handleDelete={this.deleteHandler}
                          handleEdit={this.editHandler}
                          edit={this.state.edit}
                          editNoteId={this.state.editNoteId}
                        />
            })
        }
        else{
            listOfNotes = this.state.noteList.map(item => {
                return <RenderInputs
                         key={item.id}
                          noteItem={item}
                          handleDelete={this.deleteHandler}
                          handleEdit={this.editHandler}
                          edit={this.state.edit}
                          editNoteId={this.state.editNoteId}
                        />
            })
        }
        return (
            <div>
                <h2 style={{textAlign:"center", margin:"1rem 0", textDecoration:"underline"}}>Note App</h2>
                <GetInput
                 input={this.state.note}
                 edit={this.state.edit}
                 editNoteId={this.state.editNoteId}
                 handleChange={this.changeHandler}
                 handleSubmit={this.sumbitHandler}
                />
                <hr/>
                {listOfNotes}
            </div>
        )
    }
}

export default MyApp;

