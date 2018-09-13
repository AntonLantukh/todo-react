import React, { Component } from 'react';
import Field from '../Field';
import TaskList from '../TaskList';
import ToggleBar from '../ToggleBar';
import Footer from '../Footer';
import Header from '../Header';
import { AppWrapper, AppContainer } from './Style';

export default class App extends Component {
  render() {
    return (
      <AppWrapper>
        <AppContainer>
          <Header />
          <Field />
          <ToggleBar />
          <TaskList />
          <Footer />
        </AppContainer>
      </AppWrapper>
    );
  }
}
