import React from "react";
import * as THREE from "three";
import { Line } from "drei";
import basicArgsObj from "../BasicParams";

const basicArgs = [
  basicArgsObj.radiusTop,
  basicArgsObj.radiusBottom,
  basicArgsObj.height / 2,
  basicArgsObj.radialSegments,
  basicArgsObj.heightSegments,
  basicArgsObj.openEnded,
  basicArgsObj.thetaStart,
  basicArgsObj.thetaLength,
];

const MonoclinicCell = () => {
  const edgeLength = basicArgsObj.height / 1.5;
  const a = edgeLength * 0.9;
  const b = edgeLength * 1.1;
  const c = edgeLength * 1.3;
  const bshift = edgeLength * 0.3;
  const points = [
    [0, 0, 0],
    [a, 0, 0],
    [a, b, 0],
    [0, b, 0],
    [0, 0, 0],
    [0, bshift, c],
    [a, bshift, c],
    [a, b + bshift, c],
    [0, b + bshift, c],
    [0, bshift, c],
    [a, bshift, c],
    [a, 0, 0],
    [a, b, 0],
    [a, b + bshift, c],
    [0, b + bshift, c],
    [0, b, 0],
  ];
  return (
    <group rotation={[0, Math.PI / 24, 0]}>
      <group position={[-a / 2, -(b + bshift) / 2, -c / 2]}>
        <Line
          points={points} // Array of points
          color="grey" // Default
          lineWidth={5} // In pixels (default)
          dashed={false} // Default
        />
      </group>
    </group>
  );
};

export default MonoclinicCell;
