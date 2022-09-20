import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;

  &:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`;

export default Input;