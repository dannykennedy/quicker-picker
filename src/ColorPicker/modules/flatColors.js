import { colorList } from './colorList';

const allHues = Object.values(colorList);

const groupTints = (colorList) => {
  return Object.values(
    colorList.reduce((acc, curr) => {
      // Group by hue and saturation type
      const key = curr.hueName + curr.saturationType;

      if (acc[key]) {
        return {
          ...acc,
          [key]: { tints: [...acc[key].tints, curr] },
        };
      } else {
        return {
          ...acc,
          [key]: { tints: [curr] },
        };
      }
    }, {})
  );
};

// We need to make color objects that group tints
export const allColors = groupTints(allHues);

export const simpleColors = allHues.filter((h) => {
  return h.simpleOpts.isSimpleColor;
});

export const getAssociatedColors = (simpleColorName) => {
  return allColors
    .filter((c) => c.tints.some((t) => t.associations.some((a) => a === simpleColorName)))
    .map((c) => {
      return {
        ...c,
        tints: c.tints.filter((t) => t.associations.some((a) => a === simpleColorName)),
      };
    });
};

export const simpleHues = simpleColors.filter((c) => !(c.colorTemperature === 'neutral'));
export const simpleShades = simpleColors.filter((c) => c.colorTemperature === 'neutral');
