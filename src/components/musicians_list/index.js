import React from 'react';
import PropTypes from 'prop-types';
import ListRow from '../list_row';

import './styles.scss';

const MusiciansList = ({data}) => {
  return (
    <ul className="data-list">
      {data.map((item) => <ListRow item={item}/>)}
    </ul>
  );
}

MusiciansList.proptypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  }))
}

export default MusiciansList;