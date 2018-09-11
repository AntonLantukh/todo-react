import React, { Component } from 'react';
import Field from '../Field';
import TaskList from '../TaskList';
import ToggleBar from '../ToggleBar';
import { AppWrapper, AppContainer } from './Style';

export default class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppContainer>
          <Field />
          <ToggleBar />
          <TaskList />
        </AppContainer>
      </AppWrapper>
    );
  }
}
