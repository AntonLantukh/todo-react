import React, { Component } from 'react';
import { StyledField, FieldWrapper, StyledArrow } from './Style';
import { connect } from 'react-redux';
import { addRequest } from '../../ducks/task';

const mapDispatchToProps = { addRequest };

class Field extends Component {
  onSubmitHandler = evt => {
    const ENTER_CODE = 13;
    const addRequest = this.props.addRequest;
    if (evt.keyCode === ENTER_CODE) {
      if (evt.target.value !== '') {
        const value = evt.target.value;
        addRequest( value );
      }
    }
  };

  render() {
    return (
      <FieldWrapper>
        <StyledField
          name="todo"
          type="text"
          placeholder="Что бы сделать?"
          onKeyDown={this.onSubmitHandler}
        />
        <StyledArrow />
      </FieldWrapper>
    );
  }
}

export default connect(
  false,
  mapDispatchToProps
)(Field);
