import React from 'react';
import { SparklesIcon } from '../Icons';

// Metallic colours have sparkles
export const Sparkles = ({ right, top }) => {
  return (
    <SparklesIcon
      style={{
        position: 'absolute',
        right: right || 1,
        top: top || 0,
        width: 15,
        height: 15,
        zIndex: 4,
      }}
    />
  );
};
