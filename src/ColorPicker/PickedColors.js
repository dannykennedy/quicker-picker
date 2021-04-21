import React, { useContext } from "react";
import CircleSwatch from "./CircleSwatch";
import { colorStringToHsl } from "./modules/colorEncode";
import { colorStringsAreEqual } from "./modules/colorStringHelpers";
import { ThemeContext } from "./QuickerPicker";

const PickedColors = ({
  selectedColors,
  radius,
  onDeleteColor,
  onSwatchClick,
  selectedSwatch,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p style={{ color: theme.textColor }}>Selected colors</p>
      <div
        className="color-picker-picked-colors-area"
        style={{ backgroundColor: theme.backgroundColor }}
      >
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
