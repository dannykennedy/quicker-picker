import React from "react";
import ColorPicker from "./ColorPicker";
import { themes } from "./theme";

// Dark is simply the default set here
export const ThemeContext = React.createContext({});

const QuickerPicker = ({ onSetColor, mode = "dark" }) => {
  const theme = themes[mode];
  return (
    <ThemeContext.Provider value={theme}>
      <div className="color-picker-select-wrapper">
        <ColorPicker onSetColor={onSetColor} />
      </div>
    </ThemeContext.Provider>
  );
};

export default QuickerPicker;
