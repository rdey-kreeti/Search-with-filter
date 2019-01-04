import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../checkbox_with_label';

import './styles.scss';

const Filter = ({ heading, data, filterType, handleCheck }) => {
  return (
    <section className="filter-group">
      <h3 className="filter-group__heading">{heading}</h3>
      <ul className="filter-group__list">
        {data.map((item, index) => <li className="filter-group__list__item" key={index}>
          <Checkbox
            label={item}
            checkboxData={handleCheck}
            filterType={filterType}
          />
        </li>)}
      </ul>
    </section>
  )
}

Filter.propTypes = {
  heading: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  filterType: PropTypes.string.isRequired,
  handleCheck: PropTypes.func.isRequired
}

export default Filter;
