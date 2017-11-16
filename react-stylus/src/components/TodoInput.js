import React, { Component } from 'react';
import '../App.css';
class TodoInput extends Component {
    constructor( props ) {
        super(props)
        this.state = {
            newTodo: ""
        }
        this.addClicked = this.addClicked.bind(this)
    }

    addClicked() {
        let { onAddTodo } = this.props
        onAddTodo(this.state.newTodo)
        this.setState({
            newTodo: ""
        })
        const title = document.getElementById("title").value;
        let data = {
            "description": "demo",
            "logo_url": "demo",
            "title": title
        }
        fetch('http://localhost:7777/v1/product/',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(( res ) => {
            })
    }


    render() {
        let { newTodo } = this.state
        return (
            <div>
                <input type="text" id="title" value={newTodo} onChange={( e ) => this.setState({ newTodo: e.target.value })}/>
                <button onClick={this.addClicked}>Add</button>
                {this.state.newTodo}
            </div>
        );
    }
}

export default TodoInput;
