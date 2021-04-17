import React from "react";
import Animate from "./Animate";
import { PickerButton } from "./PickerButtons";

const AnimatedPickerButton = ({
  startCoords,
  endCoords,
  buttonRadius,
  buttonType,
  onButtonClick,
  backgroundColor,
  iconColor,
  speed,
}) => {
  const [startX, startY] = startCoords;
  const [endX, endY] = endCoords;

  return (
    <Animate
      startCoords={[startX - buttonRadius, startY - buttonRadius]}
      endCoords={[endX - buttonRadius, endY - buttonRadius]}
      speed={speed}
    >
      <PickerButton
        buttonType={buttonType}
        radius={buttonRadius}
        onClick={onButtonClick}
        backgroundColor={backgroundColor}
        iconColor={iconColor}
      />
    </Animate>
  );
};

export default AnimatedPickerButton;
