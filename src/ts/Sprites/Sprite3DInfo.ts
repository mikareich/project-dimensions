import Sprite2DInfo from "./Sprite2DInfo";

class Sprite3DInfo {
  front: Sprite2DInfo;
  back: Sprite2DInfo;
  left: Sprite2DInfo;
  right: Sprite2DInfo;
  constructor(
    front: Sprite2DInfo,
    back: Sprite2DInfo,
    left: Sprite2DInfo,
    right: Sprite2DInfo
  ) {
    this.front = front;
    this.back = back;
    this.left = left;
    this.right = right;
  }
}

export default Sprite3DInfo;
