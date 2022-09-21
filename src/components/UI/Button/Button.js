// import styled from 'styled-components';

// const Button = styled.button`
//   align-items: center;
//   justify-content: center;
//   font: inherit;
//   padding:0.5rem 1.5rem;
//   border: 1px solid #ccc;
//   color: #fff;
//   background: #4C0B56;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   margin-top: 5px;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #731682;
//     border-color: #972da8;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;