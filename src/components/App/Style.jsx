import styled from 'styled-components';

export const AppWrapper = styled.div`
  position: fixed; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: linear-gradient(
    45deg,
    rgba(122, 26, 219, 1),
    rgba(255, 93, 91, 1)
  );
  background-size: cover;
  overflow: auto;
`;

export const AppContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`;
