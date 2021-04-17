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
import AnimatedColorPie from "./AnimatedColorPie";

const advancedModeButtons = [buttonTypes.BACK, buttonTypes.CONFIRM];

const AnimatedPickerButton = ({
  startCoords,
  endCoords,
  buttonRadius,
  buttonType,
  onButtonClick,
  backgroundColor,
}) => {
  const [startX, startY] = startCoords;
  const [endX, endY] = endCoords;

  return (
    <Animate
      startCoords={[startX - buttonRadius, startY - buttonRadius]}
      endCoords={[endX - buttonRadius, endY - buttonRadius]}
    >
      <PickerButton
        buttonType={buttonType}
        radius={buttonRadius}
        onClick={onButtonClick}
        backgroundColor={backgroundColor}
      />
    </Animate>
  );
};

export default AnimatedPickerButton;
