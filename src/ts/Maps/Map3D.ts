import {
  Position3D,
  Position2D,
  Size3D,
  Size2D,
  Direction,
} from "../interfaces";
import Map2D from "./Map2D";
import Object3D from "../Objects/Object3D";

class Map3D {
  size: Size3D;
  objects: Object3D[] = [];

  constructor(width: number, height: number, depth: number) {
    this.size = { width, height, depth };
  }

  addObject(object: Object3D) {
    this.objects.push(object);
  }

  get2D(direction: Direction): Map2D {
    let mapWidth, mapHeight;

    switch (direction) {
      case "front":
        mapWidth = this.size.width;
        mapHeight = this.size.height;
        break;
      case "back":
        mapWidth = this.size.height;
        mapHeight = this.size.width;
        break;
      case "left":
        mapWidth = this.size.depth;
        mapHeight = this.size.height;
        break;
      case "right":
        mapWidth = this.size.height;
        mapHeight = this.size.depth;
        break;
    }

    const map2D = new Map2D(mapWidth, mapHeight);

    this.objects.forEach((object) => {
      const object2D = object.get2D(direction);
      map2D.addObject(object2D);
    });

    return map2D;
  }
}

export default Map3D;
