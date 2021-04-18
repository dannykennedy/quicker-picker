import React from "react";
import {
  BackArrow,
  TickIcon,
  DeleteIcon,
  TrashSolidIcon as Trash,
} from "../Icons";

export const buttonTypes = {
  CONFIRM: "confirm",
  DELETE: "delete",
  BACK: "back",
  CANCEL: "cancel",
};

export const PickerButton = ({
  onClick,
  radius,
  buttonType,
  backgroundColor,
  iconColor,
}) => {
  const diameter = radius * 2;
  const iconWidth = Math.floor((diameter / 9) * 4);

  const iconStyle = {
    height: iconWidth,
    width: iconWidth,
    position: "absolute",
  };

  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="color-picker-button"
      style={{
        width: diameter,
        height: diameter,
        color: "inherit",
        backgroundColor: backgroundColor || `hsl(213, 5%, 24%)`,
        cursor: "pointer",
      }}
    >
      {buttonType === buttonTypes.CONFIRM && <TickIcon style={iconStyle} />}
      {buttonType === buttonTypes.BACK && <BackArrow style={iconStyle} />}
      {buttonType === buttonTypes.CANCEL && <DeleteIcon style={iconStyle} />}
      {buttonType === buttonTypes.DELETE && <Trash style={iconStyle} />}
    </button>
  );
};
