import React from 'react';

class Category extends React.Component{
  constructor(){
    super();
    this.deleteCategory = this.deleteCategory.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }
  deleteCategory(){
    this.props.deleteCategory(this.props.name);
  }
  selectCategory(){
    this.props.selectCategory(this.props.name);
  }
  render(){
    return (
      <li><span onClick={this.selectCategory}>{this.props.name}</span><span className="right" onClick={this.deleteCategory}>Delete</span></li>
    );
  }
}

export default Category;