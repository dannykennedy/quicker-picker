import React from 'react';
import CircleSwatch from './CircleSwatch';
import { colorStringToHsl } from './modules/colorEncode';

const PickedColors = ({ selectedColors, radius, onSwatchClick }) => {
  return (
    <div>
      <p>Selected colors</p>
      <div className="color-picker-picked-colors-area">
        {selectedColors &&
          selectedColors.map((c) => {
            const displayColor = colorStringToHsl(c);
            return (
              <CircleSwatch
                key={c}
                colorString={c}
                displayColor={displayColor}
                radius={radius}
                onSwatchClick={() => {
                  onSwatchClick(c);
                }}
                style={{ position: 'relative', display: 'inline-block' }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default PickedColors;
