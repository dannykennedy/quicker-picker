import React from "react";
import styled, { keyframes, css } from "styled-components";

// Styled wrapper that adds animation css
const AnimatedWrapper = styled.div`
  position: absolute;
  animation: ${(props) => {
    return props.cssAnimation;
  }};
  &:hover {
    color: ${(props) => {
      return props.iconHoverColor;
    }};
    transition: 0.2s;
  }
`;

const Animate = ({
  endCoords,
  startCoords,
  children,
  speed,
  iconHoverColor,
}) => {
  const [startX, startY] = startCoords;
  const [endX, endY] = endCoords;

  const moveAnimation = keyframes`
    0% { left: ${startX}px; top: ${startY}px; opacity: 0; z-index: 10 }
    100% { left: ${endX}px; top: ${endY}px; opacity: 1; z-index: 10 }
`;

  const animation = (props) => {
    return css`
      ${moveAnimation} ${speed || 0.3}s ease-out forwards;
    `;
  };

  return (
    <AnimatedWrapper cssAnimation={animation} iconHoverColor={iconHoverColor}>
      {children}
    </AnimatedWrapper>
  );
};

export default Animate;
