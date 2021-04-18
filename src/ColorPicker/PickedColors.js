import React from "react";
import CircleSwatch from "./CircleSwatch";
import { colorStringToHsl } from "./modules/colorEncode";
import { colorStringsAreEqual } from "./modules/colorStringHelpers";

const PickedColors = ({
  selectedColors,
  radius,
  onDeleteColor,
  onSwatchClick,
  selectedSwatch,
}) => {
  return (
    <div>
      <p>Selected colors</p>
      <div className="color-picker-picked-colors-area">
        {selectedColors &&
          selectedColors.map((c) => {
            const displayColor = colorStringToHsl(c);
            const isSelected = colorStringsAreEqual(c, selectedSwatch);
            return (
              <div
                key={c}
                style={{
                  margin: `0px 10px 10px 0px`,
                  display: "inline-block",
                }}
              >
                <CircleSwatch
                  colorString={c}
                  displayColor={displayColor}
                  radius={radius}
                  onSwatchClick={() => {
                    onSwatchClick(c);
                  }}
                  button={{
                    type: "cancel",
                    onClick: () => {
                      onDeleteColor(c);
                    },
                  }}
                  isSelected={isSelected}
                  style={{ position: "relative", display: "inline-block" }}
                  onDeleteColor={() => {
                    onDeleteColor(c);
                  }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PickedColors;
