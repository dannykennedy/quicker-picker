import React from 'react';
import { Sparkles } from './Sparkles';
import { isMetallic } from './modules/colorStringHelpers';
import { DeleteIcon, TickIcon } from '../Icons';
import { SELECTED_BORDER_COLOR } from './modules/colorConstants';

const CircleSwatch = ({
  hex,
  colorString,
  displayColor,
  onSwatchClick,
  radius,
  isSelected,
  style,
  icon,
}) => {
  const metallic = isMetallic(colorString);

  const diameter = radius * 2;

  return (
    <div style={{ ...style }}>
      <div
        className="color-picker-swatch"
        style={{
          width: diameter,
          height: diameter,
        }}
      >
        {metallic && <Sparkles />}
        <div
          className="color-picker-delete-icon"
          onClick={onSwatchClick}
          style={{
            position: 'absolute',
            width: diameter,
            height: diameter,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 3,
          }}
        >
          {icon === 'tick' ? (
            <TickIcon width={radius} height={radius} style={{ color: 'white' }} />
          ) : (
            <DeleteIcon width={radius} height={radius} style={{ color: 'white' }} />
          )}
        </div>
        {isSelected && (
          <div
            className="color-picker-swatch-border"
            style={{
              width: diameter + 8,
              height: diameter + 8,
              backgroundColor: SELECTED_BORDER_COLOR,
              borderRadius: '50%',
              position: 'absolute',
              top: -4,
              left: -4,
              zIndex: 1,
            }}
          ></div>
        )}
        <div
          style={{
            width: diameter,
            height: diameter,
            borderRadius: '50%',
            backgroundColor: displayColor,
            position: 'absolute',
            zIndex: 2,
          }}
        ></div>
      </div>
    </div>
  );
};

export default CircleSwatch;
