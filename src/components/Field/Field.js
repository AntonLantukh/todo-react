import React, { Component } from 'react';
import { StyledField, FieldWrapper, StyledArrow } from './Style';

class Field extends Component {
  render() {
    return (
      <FieldWrapper>
        <StyledField name="todo" type="text" placeholder="Что бы сделать?" />
        <StyledArrow />
      </FieldWrapper>
    );
  }
}

export default Field;
