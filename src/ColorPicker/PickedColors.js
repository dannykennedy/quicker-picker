import React from "react";
import CircleSwatch from "./CircleSwatch";
import { colorStringToHsl } from "./modules/colorEncode";

const PickedColors = ({ selectedColors, radius, onDeleteColor }) => {
  return (
    <div>
      <p>Selected colors</p>
      <div className="color-picker-picked-colors-area">
        {selectedColors &&
          selectedColors.map((c) => {
            const displayColor = colorStringToHsl(c);
            return (
              <div
                style={{
                  margin: `0px 20px 10px 0px`,
                  display: "inline-block",
                }}
              >
                <CircleSwatch
                  key={c}
                  colorString={c}
                  displayColor={displayColor}
                  radius={radius}
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
