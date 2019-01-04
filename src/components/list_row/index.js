import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ListRow = ({item}) => {
  return (
    <li className="data-list__row">
      <span className="data-list__row__main">{item.name}</span>
      <span className="data-list__row__sub">Genre: {item.genre}</span>
    </li>
  )
}

ListRow.proptypes = {
  item: PropTypes.objectOf(PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string
  }))
}

export default ListRow;