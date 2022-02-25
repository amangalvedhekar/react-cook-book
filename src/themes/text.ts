import {color, compose, space, typography, variant} from 'styled-system';
// @ts-ignore
import styled from 'styled-components';

export const textVariants = variant({
  variants: {
    body: {
      fontFamily: 'body',
      fontWeight: 'regular',
      lineHeight: 'copy',
      fontSize: 4,
    },
    caption: {
      fontFamily: 'body',
      fontWeight: 'medium',
      lineHeight: 'copy',
      fontSize: 2,
    },
    label: {
      fontFamily: 'heading',
      fontWeight: 'regular',
      lineHeight: 'solid',
      fontSize: 1,
    },
  },
});
export const Text = styled.p`
  ${compose(
  space,
  color,
  typography
)}
  ${textVariants}
`;
