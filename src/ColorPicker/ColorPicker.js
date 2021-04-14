import React, { useState } from "react";
import {
  simpleHues,
  simpleShades,
  getAssociatedColors,
} from "./modules/flatColors";
import { getCirclePoints } from "./modules/pointsOnCircle";
import PickedColors from "./PickedColors";
import { colorStringsAreEqual } from "./modules/colorStringHelpers";
import Animate from "./Animate";
import ColorPie from "./ColorPie";
import { PickerButton, buttonTypes } from "./PickerButtons";
import CircleSwatch from "./CircleSwatch";
import { colorStringToHsl } from "./modules/colorEncode";

const advancedModeButtons = [buttonTypes.BACK, buttonTypes.CONFIRM];

const ColorPicker = ({ onSetColor }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSimpleColor, setSelectedSimpleColor] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [associatedColors, setAssociatedColors] = useState([]);
  const [showingButtons, setShowingButtons] = useState([]);

  // Put picker back to original state (but keep selected colors);
  const resetPicker = () => {
    setSelectedColor("");
    setSelectedSimpleColor("");
    setShowingButtons([]);
    setAssociatedColors([]);
  };

  const onSetAssociatedColors = (newAssociatedColors) => {
    // Make sure 'single color' circles are grouped together
    const sortedColors = newAssociatedColors.sort((a, b) => {
      return a.tints.length > b.tints.length ? 1 : -1;
    });
    setAssociatedColors([...sortedColors]);
  };

  // ADD COLOR
  const onAddColor = () => {
    if (selectedColors.some((c) => colorStringsAreEqual(c, selectedColor))) {
      alert("You've already got that color!");
    } else {
      setSelectedColors([...selectedColors, selectedColor]);
      resetPicker();
    }
  };

  const onDeleteColor = (c) => {
    setSelectedColors([...selectedColors.filter((color) => color !== c)]);
  };

  // BACK
  const onBackPress = () => {
    resetPicker();
  };

  const simpleMode = selectedColor === "";

  const circleWidthPercent = 28;
  const selectedCircleWidthPercent = 30;
  const buttonWidthPercent = 25;
  const outerCircleWidth = 180;
  const buttonCircleWidth = 300;
  const innerCircleWidth = 60;
  const rOuter = outerCircleWidth / 2; // Radius of outer circle
  const rInner = innerCircleWidth / 2; // Radius of inner circle
  const rButtons = buttonCircleWidth / 2;
  const outerCirclePoints = getCirclePoints(
    simpleHues.length,
    rOuter,
    rOuter,
    rOuter,
    true
  );
  const innerCirclePoints = getCirclePoints(
    simpleShades.length,
    rInner,
    rOuter,
    rOuter
  );
  const buttonCirclePoints = getCirclePoints(4, rButtons, rOuter, rOuter, true);
  const buttonStartCirclePoints = getCirclePoints(
    4,
    rOuter,
    rOuter,
    rOuter,
    true
  );
  const associatedCirclePoints = getCirclePoints(
    associatedColors.length,
    rOuter,
    rOuter,
    rOuter,
    false,
    true
  );
  const radius = Math.ceil(((outerCircleWidth / 100) * circleWidthPercent) / 2);
  const largeCircleRadius = Math.ceil(
    ((outerCircleWidth / 100) * selectedCircleWidthPercent) / 2
  );
  const buttonRadius = ((outerCircleWidth / 100) * buttonWidthPercent) / 2;

  // Combine coordinates for shades and hues
  const simpleColors = [...simpleShades, ...simpleHues];
  const simplePoints = [...innerCirclePoints, ...outerCirclePoints];

  const buttonFuncs = {
    [buttonTypes.CONFIRM]: onAddColor,
    [buttonTypes.BACK]: onBackPress,
  };

  return (
    <div>
      <div className="color-circle-area">
        <div
          className="color-circle-frame"
          style={{
            width: outerCircleWidth + 70,
            height: outerCircleWidth + 70,
          }}
        >
          <div
            className="color-circle-wrapper"
            style={{
              width: outerCircleWidth,
              height: outerCircleWidth,
            }}
          >
            {showingButtons.map((btnType, i) => {
              return (
                <Animate
                  key={`btn-${simpleMode}-${i}`}
                  startCoords={[
                    buttonStartCirclePoints[i].x - buttonRadius,
                    buttonStartCirclePoints[i].y - buttonRadius,
                  ]}
                  endCoords={[
                    buttonCirclePoints[i].x - buttonRadius,
                    buttonCirclePoints[i].y - buttonRadius,
                  ]}
                >
                  <PickerButton
                    buttonType={btnType}
                    radius={buttonRadius}
                    onClick={(e) => {
                      e.preventDefault();
                      buttonFuncs[btnType]();
                    }}
                  />
                </Animate>
              );
            })}

            {/* Simple color 'Portal' */}
            {simpleMode &&
              simpleColors.map((color, i) => {
                return (
                  <Animate
                    key={`color-${simpleMode}-${i}`}
                    startCoords={[rOuter - radius, rOuter - radius]}
                    endCoords={[
                      simplePoints[i].x - radius,
                      simplePoints[i].y - radius,
                    ]}
                  >
                    <ColorPie
                      color={color}
                      selectedColor={selectedColor}
                      radius={radius}
                      fromSimpleColor={color.simpleOpts.id}
                      simpleMode={simpleMode}
                      onCircleClick={(colorString) => {
                        setSelectedSimpleColor(color.simpleOpts.id);
                        setSelectedColor(colorString);
                        onSetAssociatedColors(
                          getAssociatedColors(color.simpleOpts.id)
                        );
                        setShowingButtons(advancedModeButtons);
                      }}
                    />
                  </Animate>
                );
              })}
            {/* Circle of 'associated' complex colours */}
            {!simpleMode &&
              associatedColors.length > 0 &&
              associatedColors.map((color, i) => {
                return (
                  <Animate
                    key={`color-${simpleMode}-${i}`}
                    startCoords={[rOuter - radius, rOuter - radius]}
                    endCoords={[
                      associatedCirclePoints[i].x - radius,
                      associatedCirclePoints[i].y - radius,
                    ]}
                  >
                    <ColorPie
                      color={color}
                      selectedColor={selectedColor}
                      fromSimpleColor={selectedSimpleColor}
                      radius={radius}
                      simpleMode={simpleMode}
                      circleCoords={[
                        associatedCirclePoints[i].x,
                        associatedCirclePoints[i].y,
                      ]}
                      centreCoords={[rOuter, rOuter]}
                      onCircleClick={(colorString) => {
                        setSelectedColor(colorString);
                      }}
                    />
                  </Animate>
                );
              })}
            {/* Selected colour circle in the middle */}
            {!simpleMode && selectedColor && (
              <CircleSwatch
                key={selectedColor}
                colorString={selectedColor}
                displayColor={colorStringToHsl(selectedColor)}
                radius={largeCircleRadius}
                isSelected={true}
                onSwatchClick={() => {
                  onAddColor();
                }}
                icon="tick"
                style={{
                  position: "absolute",
                  left: rOuter - largeCircleRadius,
                  top: rOuter - largeCircleRadius,
                }}
              />
            )}
          </div>
        </div>
      </div>
      <PickedColors
        radius={radius}
        selectedColors={selectedColors}
        onSwatchClick={onDeleteColor}
      />
      <div>
        {selectedColors.map((c) => {
          return <p>{c}</p>;
        })}
      </div>
    </div>
  );
};

export default ColorPicker;
