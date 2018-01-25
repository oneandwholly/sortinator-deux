import React, { Component } from 'react';
import Form from './form/view';
import Table from './table/view';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { rows: [] };
  }

  addRow(unsortedStr, sortedStr) {
    this.setState({ rows: [...this.state.rows, [unsortedStr, sortedStr]] });
  }

  render() {
    return (
      <div className={this.props.className}>
        <Form addRow={this.addRow.bind(this)}/>
        <Table rows={this.state.rows}/>
      </div>
    );
  }
}


const StyledApp = styled(App)`
  font-family: 'Roboto', sans-serif;
  position:fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-50deg, #DCE35B, #45B649);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledApp;
