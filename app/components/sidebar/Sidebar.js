import React from 'react';
import CategoryInput from './CatergoryInput';
import Categories from './Categories';

class Sidebar extends React.Component{
  render(){
    return (
      <div className="row">
          <CategoryInput addCategory={this.props.handleAddCategory} />
          <Categories categories={this.props.categories} 
          deleteCategory={this.props.handleDeleteCategory}
          selectCategory={this.props.handleSelectCategory} />
      </div>
      

    );
  }
}

export default Sidebar;