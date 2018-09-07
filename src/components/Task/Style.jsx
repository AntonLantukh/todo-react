import styled from 'styled-components';
import CheckedPicture from './img/checked.png';
import UncheckedPicture from './img/unchecked.png';

export const StyledTask = styled.div`
  width: 500px;
  height: 50px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  font-size: 20px;
`;

export const TaskLabel = styled.label`
  position: relative;
  &::before {
    display: inline-block;
    position: absolute;
    width: 40px;
    height: 40px;
    margin-top: 5px;
    margin-left: 20px;
    content: '';
    background-image: url('${UncheckedPicture}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer
  }
`;

export const TaskCheckbox = styled.input`
  display: none;

  &:checked + ${TaskLabel}::before {
    background-image: url('${CheckedPicture}');
  }
`;

export const TaskName = styled.p`
  display: inline-block;
  margin: 0;
  padding: 14px 80px 14px;
`;
