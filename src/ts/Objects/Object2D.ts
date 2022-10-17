import { Position2D, Size2D } from "../interfaces";
import Sprite2D from "../Sprites/Sprite2D";

class Object2D {
  position: Position2D;
  size: Size2D;
  sprite: Sprite2D;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    sprite2D: Sprite2D
  ) {
    this.position = { x, y };
    this.size = { width, height };
    this.sprite = sprite2D;
  }

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(
      this.sprite.image,
      this.sprite.x,
      this.sprite.y,
      this.sprite.width,
      this.sprite.height,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
}

export default Object2D;
