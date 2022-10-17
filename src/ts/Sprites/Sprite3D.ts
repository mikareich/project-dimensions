import { Direction } from "../interfaces";
import Sprite2D from "./Sprite2D";
import Sprite2DInfo from "./Sprite2DInfo";
import Sprite3DInfo from "./Sprite3DInfo";

class Sprite3D {
  image: HTMLImageElement;
  src: string;
  front: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  back: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  left: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  right: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  constructor(image: HTMLImageElement, src: string, spriteInfo: Sprite3DInfo) {
    this.image = image;
    this.src = src;
    this.front = spriteInfo.front;
    this.back = spriteInfo.back;
    this.left = spriteInfo.left;
    this.right = spriteInfo.right;
  }

  get2D(direction: Direction): Sprite2D {
    const sprite2DInfo: Sprite2DInfo = {
      x: this[direction].x,
      y: this[direction].y,
      width: this[direction].width,
      height: this[direction].height,
    };

    return new Sprite2D(this.src, sprite2DInfo);
  }
}

export default Sprite3D;
