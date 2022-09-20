import styled from 'styled-components';

const Button = styled.button`
  align-items: center;
  justify-content: center;
  font: inherit;
  padding:0.5rem 1.5rem;
  border: 1px solid #ccc;
  color: #fff;
  background: #4C0B56;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #731682;
    border-color: #972da8;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button