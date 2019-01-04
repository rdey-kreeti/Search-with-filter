import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../checkbox_with_label';

import './styles.scss';

const Filter = ({heading, data, filterType, handleCheck}) => {
  return (
    <section className="filter-group">
      <h3 className="filter-group__heading">{heading}</h3>
      <ul className="filter-group__list">
        {data.map(item => <li className="filter-group__list__item" key={item}><Checkbox label={item} checkboxData={handleCheck} filterType={filterType}/></li>)}
      </ul>
    </section>
  )
}

Filter.proptypes = {
  heading: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
  filterType: PropTypes.string,
  handleCheck: PropTypes.func
}

export default Filter;