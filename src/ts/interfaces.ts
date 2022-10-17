interface Position3D {
  x: number; // goes from left to right
  y: number; // goes from top to bottom
  z: number; // goes from front to back
}

interface Position2D {
  x: number; // goes from left to right
  y: number; // goes from top to bottom
}

interface Size3D {
  width: number; // goes from left to right
  height: number; // goes from top to bottom
  depth: number; // goes from front to back
}

interface Size2D {
  width: number; // goes from left to right
  height: number; // goes from top to bottom
}

type Direction =
  | "front" // goes from left to right (when facing the front)
  | "back" // goes from left to right (when facing the back)
  | "left" // goes from top to bottom (when facing the left)
  | "right"; // goes from top to bottom (when facing the right)

export { Position3D, Position2D, Size3D, Size2D, Direction };
