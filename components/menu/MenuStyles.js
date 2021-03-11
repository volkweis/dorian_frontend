import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 7em;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
  margin-right: 30em;
`;
