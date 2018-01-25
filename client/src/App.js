import React, { Component } from 'react';
import Form from './form/view';
import Table from './table/view';

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
      <div className="App">
        <Form addRow={this.addRow.bind(this)}/>
        <Table rows={this.state.rows}/>
      </div>
    );
  }
}

export default App;
