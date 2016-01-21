import React from 'react';
import Category from './Category';

class Categories extends React.Component{
  
  render(){    
    let categories = this.props.categories;
    return (
      <div className="row">
        <ul>
        {
          categories.map((category, index) => {
            return <Category key={index} name={category} 
            selectCategory={this.props.selectCategory} 
            deleteCategory={this.props.deleteCategory} />;
          })
        }
        </ul>
      </div>
    );
  }
}

export default Categories;