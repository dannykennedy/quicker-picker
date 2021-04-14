import React from 'react';
import ColorPicker from './ColorPicker';

const ColorDropdown = ({ onSetColor }) => {
  return (
    <div
      style={{
        border: '1px solid #CCC',
        backgroundColor: '#EEE',
        borderRadius: 10,
        width: '100%',
      }}
    >
      <ColorPicker onSetColor={onSetColor} />
    </div>
  );
};

export default ColorDropdown;
