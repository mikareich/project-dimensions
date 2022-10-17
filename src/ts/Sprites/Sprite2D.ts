import Sprite2DInfo from "./Sprite2DInfo";

class Sprite2D {
  image: HTMLImageElement;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  constructor(src: string, sprite2DInfo: Sprite2DInfo) {
    this.image = new Image();
    this.src = src;
    this.x = sprite2DInfo.x;
    this.y = sprite2DInfo.y;
    this.width = sprite2DInfo.width;
    this.height = sprite2DInfo.height;
  }
}

export default Sprite2D;
