import React from "react";
import Animate from "./Animate";
import ColorPie from "./ColorPie";

const AnimatedColorPie = ({
  onCircleClick,
  radius,
  startCoords,
  endCoords,
  color,
  selectedColor,
  simpleMode,
  fromSimpleColor,
}) => {
  const [startX, startY] = startCoords;
  const [endX, endY] = endCoords;

  return (
    <Animate
      startCoords={[startX - radius, startY - radius]}
      endCoords={[endX - radius, endY - radius]}
    >
      <ColorPie
        color={color}
        selectedColor={selectedColor}
        fromSimpleColor={fromSimpleColor}
        radius={radius}
        simpleMode={simpleMode}
        onCircleClick={onCircleClick}
      />
    </Animate>
  );
};

export default AnimatedColorPie;
