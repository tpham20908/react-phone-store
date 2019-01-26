import styled from 'styled-components';

export const ButtonContainer = styled.button`
  border: 0.05rem solid var(--lightBlue);
  border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  text-transform: capitalize;
  font-size: 1.4rem;
  background-color: transparent;  
  color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;