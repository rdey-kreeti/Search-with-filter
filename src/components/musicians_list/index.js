import React from 'react';
import PropTypes from 'prop-types';
import ListRow from '../list_row';

import './styles.scss';

const MusiciansList = ({ data }) => {
  if(data.length) {
    return (
      <ul className="data-list">
        {data.map((item, index) => <ListRow key={index} item={item} />)}
      </ul>
    );
  } else {
    return <section className="no-data">No matches found</section>
  }
  
}

MusiciansList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  }))
}

export default MusiciansList;
