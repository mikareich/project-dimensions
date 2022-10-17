import { Position2D, Size2D } from "../interfaces";
import Object2D from "../Objects/Object2D";

class Map2D {
  size: Size2D;
  objects: Object2D[] = [];
  constructor(width: number, height: number) {
    this.size = { width, height };
  }

  addObject(object: Object2D) {
    this.objects.push(object);
  }

  draw(context: CanvasRenderingContext2D) {
    // TODO draw Map2D
  }
}

export default Map2D;
