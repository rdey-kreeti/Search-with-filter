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
    this.setState({isChecked: !this.state.isChecked, inputValue: e.target.name, checkedBoxType: e.target.dataset.type });
  }

  componentDidUpdate(PrevProps,PrevState) {
    if(PrevState.isChecked !== this.state.isChecked) {
      this.props.checkboxData(this.state.isChecked, this.state.inputValue, this.state.checkedBoxType);
    }
  }

  render() {
    return (
      <label className="chkbox-label"><input type="checkbox" data-type={this.props.filterType} name={this.props.label} checked={this.state.isChecked} onChange={this.handleOnChange} /><span>{this.props.label}</span></label>
    )
  }
}

Checkbox.proptypes = {
  label: PropTypes.string,
  checkboxData: PropTypes.func,
  filterType: PropTypes.string
}

export default Checkbox;