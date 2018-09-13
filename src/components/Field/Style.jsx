import styled from 'styled-components';
import ArrowRight from './img/right-arrow.png';
import Tasks from './img/todo.png';

export const FieldWrapper = styled.div`
  position: relative;

  &::before {
    position: absolute;
    top: 25px;
    left: 18px;
    width: 40px;
    height: 40px;
    content: "";
    background-image: url('${Tasks}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const StyledField = styled.input`
  width: 500px;
  height: 50px;
  box-sizing: border-box;
  margin: 20px auto 2px auto;
  padding: 0 100px 0 80px;
  font-size: 20px;
  border: none;

  &::placeholder {
    font-style: italic;
  }
`;

export const StyledArrow = styled.div`
  position: absolute;
  top: 25px;
  right: 18px;
  width: 40px;
  height: 40px;
  content: "";
  background-image: url('${ArrowRight}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
