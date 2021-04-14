import React from 'react';
import ColorPicker from './ColorPicker';

const ColorSelect = ({ onSetColor }) => {
  return (
    <div className="color-picker-select-wrapper">
      <ColorPicker onSetColor={onSetColor} />
    </div>
  );
};

export default ColorSelect;
