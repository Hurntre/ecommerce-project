import { css } from 'styled-components';

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};

// create others from myself. tbalet and bigger screens
