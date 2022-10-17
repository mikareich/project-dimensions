import { Direction, Position3D, Size3D } from "../interfaces";
import Object2D from "./Object2D";
import Sprite3D from "../Sprites/Sprite3D";

class Object3D {
  position: Position3D;
  size: Size3D;
  sprite: Sprite3D;
  constructor(
    x: number,
    y: number,
    z: number,
    width: number,
    height: number,
    depth: number,
    sprite: Sprite3D
  ) {
    this.position = { x, y, z };
    this.size = { width, height, depth };
    this.sprite = sprite;
  }

  get2D(direction: Direction): Object2D {
    let objectX, objectY, objectWidth, objectHeight;

    switch (direction) {
      case "front":
        objectX = this.position.x;
        objectY = this.position.z;
        objectWidth = this.size.width;
        objectHeight = this.size.height;
        break;
      case "back":
        objectX = this.position.z;
        objectY = this.position.x;
        objectWidth = this.size.height;
        objectHeight = this.size.width;
        break;
      case "left":
        objectX = this.position.y;
        objectY = this.position.z;
        objectWidth = this.size.depth;
        objectHeight = this.size.height;
        break;
      case "right":
        objectX = this.position.z;
        objectY = this.position.y;
        objectWidth = this.size.height;
        objectHeight = this.size.depth;
        break;
    }

    const object2D = new Object2D(
      objectX,
      objectY,
      objectWidth,
      objectHeight,
      this.sprite.get2D(direction)
    );

    return object2D;
  }
}

export default Object3D;
