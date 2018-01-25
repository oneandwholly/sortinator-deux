import React, { Component } from 'react';
import { submitForm } from './actions'

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = { content: '' };
    }

    onSubmit(event) {
        event.preventDefault();
        
        submitForm(this.state.content)
            .then((stream) => {
                return stream.json();
            })
            .then(sortedStr => {
                this.props.addRow(this.state.content, sortedStr);
                this.setState({
                    content: ''
                });
            });

    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Sort a String</label>
                <input
                    value={this.state.content} 
                    onChange={event => this.setState({ content: event.target.value })}
                />
            </form>
        );
    }
}

export default Form;