import React from "react";
import { SparklesIcon } from "../Icons";

// Metallic colours have sparkles
export const Sparkles = ({ right, top }) => {
  return (
    <SparklesIcon
      style={{
        position: "absolute",
        right: right === undefined ? 5 : right,
        top: top === undefined ? 5 : top,
        width: 15,
        height: 15,
        zIndex: 4,
      }}
    />
  );
};
