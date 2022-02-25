import React from 'react';
import styled from 'styled-components';
import {color, size, space, typography} from 'styled-system';

const StyledButton = styled.button`
  ${color};
  ${space};
  ${typography};
  ${size};
`;
export interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  child: string;
  rest: Record<any, any>
}
export default function Button({type, child, ...rest}: ButtonProps) {

  return (
    <StyledButton type={type} {...rest}>
      {child}
    </StyledButton>
  );
}
