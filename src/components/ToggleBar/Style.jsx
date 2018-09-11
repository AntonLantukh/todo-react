import styled from 'styled-components';
import CheckedPicture from './img/round-on.png';
import UncheckedPicture from './img/round-off.png';

export const StyledToggleBar = styled.div`
  width: 500px;
  height: 25px;
  margin: 0 0 20px 0;
  padding: 0 70px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  font-size: 20px;
  list-style: none;
`;

export const StyledWrapper = styled.div`
  display: inline-block;
`

export const StyledLabel = styled.label`
  position: relative;
  margin-right: 60px;
  font-size: 12px;
  font-style: italic;
  cursor: pointer;

  &::before {
    display: inline-block;
    position: absolute;
    width: 15px;
    height: 15px;
    margin-top: 6px;
    margin-left: -20px;
    content: '';
    background-image: url('${UncheckedPicture}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer
  }
`;

export const StyledInput = styled.input`
  display: none;

  &:checked + ${StyledLabel}::before {
    background-image: url('${CheckedPicture}');
  }
`;