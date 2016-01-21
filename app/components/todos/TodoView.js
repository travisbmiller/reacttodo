import React from 'react';
import TodoInput from './TodoInput';
import Todos from './Todos';

class TodoView extends React.Component{
  constructor(){
    super();
    this.checkCategory = this.checkCategory.bind(this);
  }
  checkCategory(){
    if(this.props.category === 'All'){
      return;
    }
    return <TodoInput addTodo={this.props.addTodo}/>;
  }
  
  render(){
    console.log(this.props);
    return (
      <div>
        {
          this.checkCategory()
        }
        <Todos todos={this.props.todos} />
      </div>
    );
  }
}

export default TodoView;
