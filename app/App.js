import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import TodoView from './components/todos/TodoView';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      categories: {
        'home': [],
        'personal': []
      },
      username: 'John',
      currentCategory: 0
    };
    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
    this.getTodos = this.getTodos.bind(this);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  handleAddCategory(input){
    const newState = this.state.categories;
    newState[input] = newState[input] || [];
    this.setState({
      categories: newState
    });
  }
  handleDeleteCategory(category){
    const newState = this.state.categories;
    delete newState[category];
    this.setState({
      categories: newState
    });
  }
  handleSelectCategory(category){
    this.setState({
      currentCategory: category
    });
  }
  getTodos(){
    if(this.state.currentCategory){
      return this.state.categories[this.state.currentCategory];
    }else{
      const allCats = [];
      for(let category in this.state.categories){
        allCats.concat(this.state.categories[category]);
      }
      return allCats;
    }
  }
  addTodo(value){
    const categories = this.state.categories;
    categories[this.state.currentCategory].push(value);

    this.setState({
      categories: categories
    });
  }
  render(){
    return (
      <div>
        <div className="row">
          <div className="col s12 no-padding">
            <Navbar username={this.state.username}/>
          </div>
        </div>
        <div className='row'>
          <div className='col s4'>
            <Sidebar categories={Object.keys(this.state.categories)} 
            handleDeleteCategory={this.handleDeleteCategory} 
            handleAddCategory={this.handleAddCategory}
            handleSelectCategory={this.handleSelectCategory} />
          </div>
          <div className='col s8'>
            <TodoView addTodo={this.addTodo}
              category={this.state.currentCategory ? this.state.currentCategory : 'All'} 
              todos={this.getTodos()}/>
          </div>
        </div>
      </div>);
  } 
}

export default App;

//ReactDOM.render(<App />, document.getElementById('app'));



