import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      inputValue: '',
      checkedBoxType: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      isChecked: !this.state.isChecked,
      inputValue: e.target.name,
      checkedBoxType: e.target.dataset.type
    }, () => this.props.checkboxData(this.state.isChecked, this.state.inputValue, this.state.checkedBoxType));
  }

  render() {
    return (
      <label className="checkbox-label">
        <input
          type="checkbox"
          className="checkbox-label__input"
          data-type={this.props.filterType}
          name={this.props.label}
          checked={this.state.isChecked}
          onChange={this.handleOnChange}
        />
        <span className="checkbox-label__text">{this.props.label}</span>
      </label>
    )
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checkboxData: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired
}

export default Checkbox;
