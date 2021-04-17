import React from "react";
import {
  colorTemperatures,
  SELECTED_BORDER_COLOR,
} from "./modules/colorConstants";
import { stringifyColor } from "./modules/colorEncode";
import * as d3 from "d3";
import { Sparkles } from "./Sparkles";
import { colorStringsAreEqual } from "./modules/colorStringHelpers";
import { hslToHexString, stringifyHsl } from "./modules/colorStringHelpers";

const ColorPie = ({
  simpleMode,
  selectedColor,
  onSetColor,
  color,
  onCircleClick,
  radius,
  fromSimpleColor,
}) => {
  const colorTints = simpleMode ? [color] : color.tints;
  const colorTemperature = colorTints[0].colorTemperature;

  // Array of colors based on base color and tints
  const hslColors = colorTints.map((t) => {
    const hex = hslToHexString(...t.hsl);
    const colorString = stringifyColor(t.name, fromSimpleColor, hex);
    return {
      name: t.name,
      colorString: colorString,
      value: stringifyHsl(...t.hsl),
    };
  });

  const data = colorTints.map((t) => 1);

  let pieData = d3.pie().sort(null)(data);
  const arcFunction = d3.arc().outerRadius(13).innerRadius(0);
  const selectedArcFunction = d3.arc().outerRadius(16).innerRadius(0);

  return (
    <div
      style={{
        position: "relative",
        cursor: "pointer",
        width: radius * 2,
        height: radius * 2,
      }}
    >
      <div style={{ position: "absolute" }}>
        <svg
          width={radius * 2}
          height={radius * 2}
          viewBox="0 0 32 32"
          className="donut"
        >
          <g transform={`translate(${16}, ${16})`}>
            {pieData.map((arc, i) => {
              const displayColor = hslColors[i];
              const { colorString } = displayColor;
              const isSelected = colorStringsAreEqual(
                selectedColor,
                colorString
              );
              return (
                <path
                  key={i}
                  onClick={() => {
                    onCircleClick(colorString);
                  }}
                  fill={
                    isSelected && !simpleMode
                      ? SELECTED_BORDER_COLOR
                      : "hsl(213, 5%, 28%)"
                  }
                  d={selectedArcFunction(arc)}
                ></path>
              );
            })}
          </g>
        </svg>
      </div>
      <div style={{ position: "absolute" }}>
        <svg
          width={radius * 2}
          height={radius * 2}
          viewBox="0 0 32 32"
          className="donut"
        >
          <g transform={`translate(${16}, ${16})`}>
            {pieData.map((arc, i) => {
              const displayColor = hslColors[i];
              const { colorString, value, name } = displayColor;
              const isSelected = colorStringsAreEqual(
                selectedColor,
                colorString
              );
              return (
                <path
                  key={i}
                  onClick={() => {
                    onCircleClick(colorString);
                  }}
                  fill={value}
                  d={arcFunction(arc)}
                  stroke={isSelected ? "hsl(213, 5%, 35%)" : value}
                  strokeWidth={isSelected ? 0 : 0}
                >
                  <title>{name}</title>
                </path>
              );
            })}
          </g>
        </svg>
      </div>
      {colorTemperature === colorTemperatures.METALLIC && <Sparkles />}
    </div>
  );
};

export default ColorPie;
