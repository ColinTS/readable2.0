import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Spacer from './Spacer'

function Category({ categories }) {
  return (
    <div>
    {categories && categories.map((category)=>
      <Spacer key={`spacer${category.name}`}>
       <Link key={category.name} to={`/categories/${category.name}`}>{category.name}</Link>
      </Spacer>
    )}
  </div>
  );
}

Category.propTypes = {
  item: PropTypes.any,
};

export default Category;