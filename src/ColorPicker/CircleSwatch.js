import React, { useState } from "react";
import { Sparkles } from "./Sparkles";
import { isMetallic } from "./modules/colorStringHelpers";
import { SELECTED_BORDER_COLOR } from "./modules/colorConstants";
import AnimatedPickerButton from "./AnimatedPickerButton";

const BORDER_WIDTH = 5;
const TOTAL_BORDER_WIDTH = BORDER_WIDTH * 2;

const CircleSwatch = ({
  hex,
  colorString,
  displayColor,
  onSwatchClick,
  radius,
  isSelected,
  style,
  icon,
  onDeleteColor,
}) => {
  const [isOutlined, setIsOutlined] = useState(isSelected);
  const [showingButtons, setShowingButtons] = useState(false);

  const metallic = isMetallic(colorString);

  const diameter = radius * 2;
  const buttonRadius = Math.floor(radius * (3 / 7));

  return (
    <div
      style={{
        ...style,
        width: diameter,
        height: diameter,
      }}
    >
      <div
        className="color-picker-swatch"
        style={{
          cursor: "pointer",
          width: diameter - TOTAL_BORDER_WIDTH,
          height: diameter - TOTAL_BORDER_WIDTH,
        }}
      >
        {metallic && <Sparkles />}
        <div
          onClick={() => {
            onSwatchClick && onSwatchClick();
            setShowingButtons(true);
          }}
          onMouseEnter={() => {
            setIsOutlined(true);
          }}
          onMouseOut={() => {
            if (!isSelected) {
              setIsOutlined(false);
            }
          }}
          style={{
            width: diameter - TOTAL_BORDER_WIDTH,
            height: diameter - TOTAL_BORDER_WIDTH,
            borderRadius: "50%",
            borderWidth: BORDER_WIDTH,
            borderStyle: "solid",
            borderColor: isOutlined ? SELECTED_BORDER_COLOR : "transparent",
            backgroundColor: displayColor,
            position: "absolute",
            zIndex: 2,
          }}
        />
      </div>
      {showingButtons && (
        <AnimatedPickerButton
          startCoords={[diameter - 5, 5]}
          endCoords={[diameter, 0]}
          buttonRadius={buttonRadius}
          buttonType={"cancel"}
          onButtonClick={onDeleteColor}
          backgroundColor={"#333"}
          speed={0.2}
        />
      )}
    </div>
  );
};

export default CircleSwatch;
