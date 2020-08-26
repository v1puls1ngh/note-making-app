import React, { Component } from 'react';
import Header from './components/header.js';
import Footer from './components/footer.js';
import GetInput from './components/getInput.js';
import RenderInputs from './components/renderInput.js';
class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: '',
            noteList: []
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.sumbitHandler = this.sumbitHandler.bind(this);
       
    }
    // Input Change Handling.
    changeHandler(event){
        this.setState({
          note: event.target.value  
        })
    }
   
    // Handling the sumbission of the inputs by the user.
    sumbitHandler(event){
        event.preventDefault();
        if (!this.state.note) {
            return;
        }
        this.setState(prevState => {
            const updatedNoteList = [...prevState.noteList, {
                id: prevState.noteList.length,
                note: this.state.note
            }]
        return {
            noteList: updatedNoteList
        }
        })
    }

    render() {
        const listOfNotes = this.state.noteList.map(item => {
            return <RenderInputs key={item.id} note={item.note} />
        })
        return (
            <div>
                {/* <Header/> */}
                <h2 style={{textAlign:"center", margin:"1rem 0", textDecoration:"underline"}}>Note App</h2>
                <GetInput
                 input={this.state.note}
                 handleChange={this.changeHandler}
                 handleSubmit={this.sumbitHandler}
                />
                <hr/>
                {listOfNotes}
                {/* <Footer/> */}
            </div>
        )
    }
}

export default MyApp;

