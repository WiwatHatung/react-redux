import React, { Component } from 'react';
import Todoitem from "./Todoitem";

class Todolist extends Component {
    constructor(props) {
        super(props)
        // this.getData = this.getData.bind(this)
    }
    state = {
        products: []
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        fetch('http://localhost:7777/v1/product/')
            .then(res => res.json())
            .then(( res ) => {
                console.log(res)
                this.setState({
                    products: res
                })
            })
    }

    render() {
        let { items } = this.props
        return (
            <div>
                <ul>
                    {items.map(( demo, i ) => <li key={i}><Todoitem text={demo}/></li>)}
                </ul>
                <button onClick={this.getData}>Load Data</button>
                {
                    this.state.products.map(( item, index ) => {
                        return (
                            <div>
                                <h1 key={index}>
                                    {`${item.title} :::  ${item.description}`}</h1>
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}

export default Todolist;
