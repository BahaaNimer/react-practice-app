import styled from "styled-components";

const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  margin-top: 5px;
  margin-bottom: 5px;


  &:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`;

export default Input;