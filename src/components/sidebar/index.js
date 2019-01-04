import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Filter from '../filter'

import './styles.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: [{type:'name', names: []}, {type:'genre', genres: []}]
    }
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(isChecked, value, type) {
    var checkedArrayIndex = this.state.checkedItems.findIndex(item => item.type === type);
    if(type === 'name') {
      if(isChecked) {
        this.state.checkedItems[checkedArrayIndex].names.push(value);
      } else if(isChecked === false) {
        let uncheckedItemindex = this.state.checkedItems[checkedArrayIndex].names.indexOf(value);
        if(uncheckedItemindex !== -1) {
          this.state.checkedItems[checkedArrayIndex].names.splice(uncheckedItemindex,1);
        }
      }
    } else if(type === 'genre') {
      if(isChecked) {
        this.state.checkedItems[checkedArrayIndex].genres.push(value);
      } else if(isChecked === false) {
        let uncheckedItemindex = this.state.checkedItems[checkedArrayIndex].genres.indexOf(value);
        if(uncheckedItemindex !== -1) {
          this.state.checkedItems[checkedArrayIndex].genres.splice(uncheckedItemindex,1);
        }
      }
    }
    this.props.handleFilter(this.state.checkedItems, type);
  }

  render() {
    return (
      <section className="sidebar">
        <h2 className="sidebar__heading">FILTER BY</h2>
        <Filter heading="Name" data={this.props.musicianNames} filterType="name" handleCheck={this.handleCheck} />
        <Filter heading="Genre" data={this.props.musicianGenres} filterType="genre" handleCheck={this.handleCheck}/>
      </section>
    )
  }
}

Sidebar.proptypes = {
  musicianNames: PropTypes.arrayOf(PropTypes.string),
  musicianGenres: PropTypes.arrayOf(PropTypes.string),
  handleFilter: PropTypes.func
}

export default Sidebar;