import styled from 'styled-components';
import CheckedPicture from './img/checked.png';
import UncheckedPicture from './img/unchecked.png';
import CrossPicture from './img/delete.png';

export const StyledTask = styled.li`
  display: flex;
  justify-content: space-between;
  width: 500px;
  height: 50px;
  margin: 0 0 5px 0;
  padding: 0;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  font-size: 20px;
  list-style: none;
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
  &:hover::before {
    background-color: rgb(152, 251, 152);
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

export const TaskButton = styled.button`
 width: 40px;
 height: 40px;
 margin-right: 10px;
 margin-top: 5px;
 background-image: url('${CrossPicture}');
 background-position: center;
 background-size: cover;
 background-repeat: no-repeat;
 background-color: transparent;
 outline: none;
 border: none;
 cursor: pointer;
`;
