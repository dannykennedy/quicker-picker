// A circle has 2 PI radians worth of angles
const NUM_RADIANS_IN_CIRCLE = Math.PI * 2;
// 90 degrees is one quarter of this
const NINETY_DEGREES = NUM_RADIANS_IN_CIRCLE / 4;

// const getPointsOnCircle = (numPoints, radius, centerXY, offset, rotate, simple);

// Calculates an arbitrary number of points on a circle,
// Given the radius and centre coordinates of the circle
export const getCirclePoints = (
  numPoints,
  radius = 1,
  centreX = 0,
  centreY = 0,
  offsetCircle,
  rotateCircle
) => {
  if (!numPoints) return [];
  const points = Array(numPoints)
    .fill()
    .map((v, i) => {
      // Angle gap between points
      const angleGap = NUM_RADIANS_IN_CIRCLE / numPoints;
      // Go around the circle incrementing i
      const baseAngle = angleGap * i;
      // Start at TOP of the circle (90), not right edge (0)
      const offsetAngle = baseAngle - NINETY_DEGREES;
      // If num points is even
      // We want something more like a square than a diamond, to conserve space
      const theta = offsetCircle ? offsetAngle - angleGap / 2 : offsetAngle;

      let x = centreX + radius * Math.cos(theta);
      let y = centreY + radius * Math.sin(theta);
      return [x, y];
    });

  const rotateAmount =
    Math.ceil(points.length / 4) + Math.ceil(points.length / 2);

  const rotatedPoints = rotateArray(points, rotateAmount);

  return rotateCircle ? rotatedPoints : points;
};

const rotateArray = (arr, count = 1) => {
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
};
