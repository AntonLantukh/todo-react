import React, { Component } from 'react';
import {StyledToggleBar, StyledWrapper, StyledLabel, StyledInput} from './Style';
import { connect } from 'react-redux';
import { changeFilter } from '../../ducks/task';

const mapDispatchToProps = { changeFilter };
const buttons = {all: 'Все', active: 'Активные', complete: 'Завершенные'};

class ToggleBar extends Component {
    onChangeHandler = (evt) => {
      const {changeFilter} = this.props;
      const value = evt.target.checked;
      if (value) {
        changeFilter(evt.target.value);
      }
    }

    render() { 
        return (  
            <StyledToggleBar>
                {Object.keys(buttons).map((item, i) => (
                  <StyledWrapper key={i+item}>
                    <StyledInput type="radio" name="choice" value={item} id={item} onChange={this.onChangeHandler}/>
                    <StyledLabel htmlFor={item}>{buttons[item]}</StyledLabel>
                  </StyledWrapper>
                ))}
            </StyledToggleBar>
        );
    }
}

export default connect(false, mapDispatchToProps)(ToggleBar);
