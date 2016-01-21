import React from 'react';
import ReactDOM from 'react-dom';

class TodoInput extends React.Component{
  constructor(){
    super();
  }
  handleSubmit(e){
    e.preventDefault();
    const input = ReactDOM.findDOMNode(this.refs.inputTodo);
    let value = input.value;
    input.value = '';
    this.props.addTodo(value);
  }
  render(){
    return (
      <form  onSubmit={(e) => this.handleSubmit(e)}>
        <input ref="inputTodo" type="text" />
      </form>
    );
  }
}

export default TodoInput;