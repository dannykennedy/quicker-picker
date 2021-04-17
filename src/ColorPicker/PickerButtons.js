import React from "react";
import { BUTTON_TEXT_COLOR } from "./modules/colorConstants";
import { BackArrow, TickIcon, DeleteIcon, TrashSolidIcon } from "../Icons";

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
}) => {
  const diameter = radius * 2;
  const iconWidth = Math.floor((diameter / 9) * 4);

  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="color-picker-button"
      style={{
        width: diameter,
        height: diameter,
        backgroundColor: backgroundColor || `hsl(213, 5%, 24%)`,
        cursor: "pointer",
      }}
    >
      {buttonType === buttonTypes.CONFIRM && (
        <TickIcon
          style={{
            height: iconWidth,
            width: iconWidth,
            color: BUTTON_TEXT_COLOR,
          }}
        />
      )}
      {buttonType === buttonTypes.BACK && (
        <BackArrow
          style={{
            height: iconWidth,
            width: iconWidth,
            color: BUTTON_TEXT_COLOR,
          }}
        />
      )}
      {buttonType === buttonTypes.CANCEL && (
        <DeleteIcon
          style={{
            height: iconWidth,
            width: iconWidth,
            color: BUTTON_TEXT_COLOR,
          }}
        />
      )}
      {buttonType === buttonTypes.DELETE && (
        <TrashSolidIcon
          style={{
            height: iconWidth,
            width: iconWidth,
            color: BUTTON_TEXT_COLOR,
          }}
        />
      )}
    </button>
  );
};
