import React from "react";
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
  forceOutline,
}) => {
  const metallic = isMetallic(colorString);

  const diameter = radius * 2;
  const buttonRadius = Math.floor(radius * (3 / 7));

  const borderColorStyle =
    isSelected || forceOutline ? { borderColor: SELECTED_BORDER_COLOR } : {};

  const swatchStyle = {
    width: diameter - TOTAL_BORDER_WIDTH,
    height: diameter - TOTAL_BORDER_WIDTH,
    borderRadius: "50%",
    borderWidth: BORDER_WIDTH,
    borderStyle: "solid",
    backgroundColor: displayColor,
    position: "absolute",
    zIndex: 2,
    ...borderColorStyle,
  };

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
          className="color-picker-swatch-inner"
          onClick={(e) => {
            e.stopPropagation();
            onSwatchClick && onSwatchClick();
          }}
          style={swatchStyle}
        />
      </div>
      {isSelected && (
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
