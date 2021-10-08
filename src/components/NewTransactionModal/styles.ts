import styled from "styled-components";
import { darken, transparentize } from "polished";

interface RadioButtonProps {
  isActive: boolean;
  colorActive: 'green' | 'red';
}

// const colors = {
//   red: '#e52d42',
//   green:'#33cc95'
// }

export const Container = styled.form`

h2 {
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
} 

input {
  width: 100%;
  padding: 0 2rem;
  height: 4rem;
  background: #E7E9EE;
  border: 1px solid #D7D7D7;
  box-sizing: border-box;
  border-radius: 0.25rem;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  & + input {
    margin-top: 1rem;
  }
}

button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    margin-top: 1.25rem;
    height: 4rem;
    background: var(--green);
    color: #ffffff;
    border: 0;
    border-radius: 0.25rem;

    font-weight: 600;
    font-size: 1rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`; 

export const RadioButton = styled.button<RadioButtonProps>`
  border: 1px solid #D7D7D7;
  height: 4rem;
  border-radius: 0.25rem;
  color: var(--text-title);
  background: ${(props) => props.isActive 
    ? transparentize(0.9, props.colorActive)
    : 'transparent'};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#D7D7D7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }


`;