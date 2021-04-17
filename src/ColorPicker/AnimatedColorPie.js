import React, { useState } from "react";
import {
  simpleHues,
  simpleShades,
  getAssociatedColors,
} from "./modules/flatColors";
import { getCirclePoints } from "./modules/pointsOnCircle";
import PickedColors from "./PickedColors";
import { colorStringsAreEqual } from "./modules/colorStringHelpers";
import Animate from "./Animate";
import ColorPie from "./ColorPie";
import { PickerButton, buttonTypes } from "./PickerButtons";
import CircleSwatch from "./CircleSwatch";
import { colorStringToHsl } from "./modules/colorEncode";

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
