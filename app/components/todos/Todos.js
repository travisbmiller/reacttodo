import React from 'react';
import Todo from './Todo.js'

class Todos extends React.Component{
  render(){
    return (
      <div>
        <ul>
          {
            this.props.todos.map((todo, index) => {
              return <Todo key={index} todo={todo} />;
            })
          }
        </ul>
      </div>
    );
  }
}

export default Todos;