import React, { Component } from 'react';
import {
    StyledField
  } from './Style';

class Field extends Component {
    render() { 
        return (  
          <StyledField name="todo" type="text" placeholder="Что бы сделать?"/>
        );
    }
}
 
export default Field;