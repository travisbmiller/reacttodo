import React from 'react';
import ReactDOM from 'react-dom';

class categoryInput extends React.Component{
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const input = ReactDOM.findDOMNode(this.refs.CategoryInput);
    const inputVal = input.value;
    input.value = '';
    this.props.addCategory(inputVal);
  }
  render(){
    return (
      <form className="col s12" onSubmit={this.handleSubmit}>
      <div className="row">
        <div className="input-field col s8">
          <input placeholder="A a Category" type="text" ref="CategoryInput" />
        </div>
        <div className="col s4">
          <button className="btn waves-effect waves-light" >Submit
            <i className="material-icons right">add</i>
          </button>
        </div>
      </div>
    </form>
    );
  }
}

export default categoryInput;