import React, { Component } from 'react';
import { submitForm } from './actions'
import styled from 'styled-components';

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
            <form onSubmit={this.onSubmit.bind(this)} className={this.props.className}>
                <StyledLabel>Sort a String</StyledLabel>
                <StyledInput
                    value={this.state.content} 
                    onChange={event => this.setState({ content: event.target.value })}
                />
            </form>
        );
    }
}

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 50vh;
`

const StyledInput = styled.input`
    width: 600px;
    height: 30px;
    font-size: 1.8em;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
    background-color: #f1f1f1;
    border: 1px solid #eee;
`;

const StyledLabel = styled.label`
    color: #000700;
    font-size: 5em;
    margin-bottom: 5%
`;

export default StyledForm;