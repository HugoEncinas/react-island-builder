import styled from 'styled-components';

export const CellStyled = styled.div`
  display: inline-block;
  border: 1px solid white;
  width: 30px;
  height: 30px;
  background: ${(props) => (props.color === 0 ? 'green' : 'blue')};
`;
