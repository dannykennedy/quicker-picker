import React from 'react';
import { BUTTON_TEXT_COLOR } from './modules/colorConstants';
import { BackArrow, TickIcon, DeleteIcon, TrashSolidIcon } from '../Icons';

export const buttonTypes = {
  CONFIRM: 'confirm',
  DELETE: 'delete',
  BACK: 'back',
  CANCEL: 'cancel',
};

export const PickerButton = ({ onClick, radius, buttonType }) => {
  const diameter = radius * 2;
  return (
    <button
      onClick={onClick}
      className="color-picker-button"
      style={{ width: diameter, height: diameter }}
    >
      {buttonType === buttonTypes.CONFIRM && (
        <TickIcon style={{ height: 20, width: 20, color: BUTTON_TEXT_COLOR }} />
      )}
      {buttonType === buttonTypes.BACK && (
        <BackArrow style={{ height: 20, width: 20, color: BUTTON_TEXT_COLOR }} />
      )}
      {buttonType === buttonTypes.CANCEL && (
        <DeleteIcon style={{ height: 20, width: 20, color: BUTTON_TEXT_COLOR }} />
      )}
      {buttonType === buttonTypes.DELETE && (
        <TrashSolidIcon style={{ height: 20, width: 20, color: BUTTON_TEXT_COLOR }} />
      )}
    </button>
  );
};
