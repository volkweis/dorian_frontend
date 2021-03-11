import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 10px;
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

export const HiddenMenu = styled.div`
  position: fixed;
  z-index: 1;
  width: ${({ isVisible }) => isVisible || '0px'};
  height: 100%;
  right: 0px;
  top: 100px;
  background-color: #3465a4;
  overflow-x: hidden;
  transition: 0.2s;
`;
export const ButtonMenu = styled.div`
  cursor: pointer;
`;
export const OptionContainer = styled.div`
  position: absolute;
  display: ${({ displayText }) => displayText || 'none'};
  color: white;
  padding: 1em;
`;
