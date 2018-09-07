import React, { Component } from 'react';
import Field from '../Field';
import Task from '../Task'
import {AppWrapper, AppContainer} from './Style'

export default class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppContainer>
          <Field />
          <Task />
        </AppContainer>
      </AppWrapper>
    );
  }
}
