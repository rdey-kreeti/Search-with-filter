import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MusiciansList from '../musicians_list';
import Sidebar from '../sidebar';
import SearchBar from '../search';

import './styles.scss';

class Musicians extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      searchTerm: '',
      checkedItems: this.props.checkedItems
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleSearch(e) {
    const inputValue = e.target.value;
    this.setState({ searchTerm: inputValue }, () => this.renderFilteredResults());
  }

  handleFilter(checkedItems) {
    this.setState({ checkedItems: checkedItems }, () => this.renderFilteredResults());
  }

  renderFilteredResults() {
    const { searchTerm, checkedItems } = this.state;
    const fullDataSet = this.props.data;
    const nameArrayIndex = checkedItems.findIndex(item => item.type === 'name');
    const genreArrayIndex = checkedItems.findIndex(item => item.type === 'genre');
    const nameArray = checkedItems[nameArrayIndex].names;
    const genreArray = checkedItems[genreArrayIndex].genres;

    if (!nameArray.length && !genreArray.length) {
      let updateMusiciansList = fullDataSet.filter(item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || item.genre.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
      this.setState({ data: updateMusiciansList });
    }

    if (!searchTerm.length) {
      let filteredList = fullDataSet.filter(item => checkedItems[nameArrayIndex].names.includes(item.name) || checkedItems[genreArrayIndex].genres.includes(item.genre));
      this.setState({ data: filteredList });
    }

    if ((nameArray.length || genreArray.length) && searchTerm.length) {
      let combinedFilteredList = fullDataSet.filter(item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || item.genre.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
      combinedFilteredList = combinedFilteredList.filter(item => checkedItems[nameArrayIndex].names.includes(item.name) || checkedItems[genreArrayIndex].genres.includes(item.genre));
      this.setState({ data: combinedFilteredList });
    }

    if (!nameArray.length && !genreArray.length && !searchTerm.length) {
      this.setState({ data: fullDataSet });
    }
  }

  render() {
    const names = this.props.data.map(item => item.name);
    let genres = this.props.data.map(item => item.genre);
    genres = genres.filter((element, index) => genres.indexOf(element) === index);

    return (
      <section className="musicians-page">
        <h1 className="musicians-page__heading">Search with filter</h1>
        <SearchBar searchValue={this.state.searchTerm} handleSearch={this.handleSearch}/>
        <section className="musicians-page__content">
          <Sidebar musicianNames={names} musicianGenres={genres} handleFilter={this.handleFilter}/>
          <MusiciansList data={this.state.data}/>
        </section>
      </section>
    )
  }
}

Musicians.defaultProps = {
  checkedItems: [{type:'name', names:[]}, {type:'genre', genres:[]}]
};

Musicians.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  })).isRequired
}

export default Musicians;
