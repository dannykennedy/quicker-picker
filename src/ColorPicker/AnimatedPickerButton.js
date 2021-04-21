import React from "react";
import Animate from "./Animate";
import { PickerButton } from "./PickerButton";

const AnimatedPickerButton = ({
  startCoords,
  endCoords,
  buttonRadius,
  buttonType,
  onButtonClick,
  backgroundColor,
  iconColor,
  iconHoverColor,
  speed,
}) => {
  const [startX, startY] = startCoords;
  const [endX, endY] = endCoords;

  return (
    <Animate
      startCoords={[startX - buttonRadius, startY - buttonRadius]}
      endCoords={[endX - buttonRadius, endY - buttonRadius]}
      speed={speed}
      iconColor={iconColor}
      iconHoverColor={iconHoverColor}
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
