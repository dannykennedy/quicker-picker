import React from 'react';
import styled, { keyframes, css } from 'styled-components';

// Styled wrapper that adds animation css
const AnimatedWrapper = styled.div`
  position: absolute;
  animation: ${(props) => {
    return props.cssAnimation;
  }};
`;

const Animate = ({ endCoords, startCoords, children }) => {
  const [startX, startY] = startCoords;
  const [endX, endY] = endCoords;

  const moveAnimation = keyframes`
    0% { left: ${startX}px; top: ${startY}px; }
    100% { left: ${endX}px; top: ${endY}px; }
`;

  const animation = (props) => {
    return css`
      ${moveAnimation} 0.3s ease-out forwards;
    `;
  };

  return <AnimatedWrapper cssAnimation={animation}>{children}</AnimatedWrapper>;
};

export default Animate;
