import React, { useContext } from "react";
import { Sparkles } from "./Sparkles";
import { isMetallic } from "./modules/colorStringHelpers";
import AnimatedPickerButton from "./AnimatedPickerButton";
import { ThemeContext } from "./QuickerPicker";
import styled from "styled-components";

const BORDER_WIDTH = 5;
const TOTAL_BORDER_WIDTH = BORDER_WIDTH * 2;

// Styled wrapper that adds animation css
const BorderedSwatch = styled.div`
  border-radius: 50%;
  border-style: solid;
  position: absolute;
  z-index: 2;
  border-color: ${(props) => {
    return props.borderColor;
  }};
  width: ${(props) => {
    return props.width + "px";
  }};
  height: ${(props) => {
    return props.height + "px";
  }};
  border-color: ${(props) => {
    return props.borderColor;
  }};
  border-width: ${(props) => {
    return props.borderWidth + "px";
  }};
  background-color: ${(props) => {
    return props.backgroundColor;
  }};
  &:hover {
    border-color: ${(props) => {
      return props.hoverBorderColor;
    }};
    transition: 0.2s;
  }
`;

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
  button,
  forceOutline,
}) => {
  const theme = useContext(ThemeContext);
  const metallic = isMetallic(colorString);

  const diameter = radius * 2;
  const buttonRadius = Math.ceil(radius * (3 / 5));

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
          width: diameter,
          height: diameter - TOTAL_BORDER_WIDTH,
        }}
      >
        {metallic && !isSelected && <Sparkles right={0} top={0} />}
        <BorderedSwatch
          width={diameter - TOTAL_BORDER_WIDTH}
          height={diameter - TOTAL_BORDER_WIDTH}
          borderWidth={BORDER_WIDTH}
          backgroundColor={displayColor}
          hoverBorderColor={theme.selectedBorderColor}
          borderColor={
            isSelected ? theme.selectedBorderColor : theme.unselectedBorderColor
          }
          onClick={(e) => {
            e.stopPropagation();
            onSwatchClick && onSwatchClick();
          }}
        />
      </div>
      {isSelected && (
        <AnimatedPickerButton
          startCoords={[diameter - buttonRadius, buttonRadius]}
          endCoords={[diameter - 5, 5]}
          buttonRadius={buttonRadius}
          buttonType={button.type}
          onButtonClick={button.onClick}
          backgroundColor={"#BBB"}
          iconColor={"#333"}
          speed={0.2}
          iconHoverColor={displayColor}
        />
      )}
    </div>
  );
};

export default CircleSwatch;
