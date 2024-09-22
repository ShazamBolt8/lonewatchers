import { createScene } from "../component/scene.js";
import { createCamera } from "../component/camera.js";
import { createRenderer } from "../system/renderer.js";
import { createCube } from "../component/cube.js";
import { Resizer } from "../system/Resizer.js";
import { Loop } from "../system/Loop.js";
class Realm {
  constructor(container) {
    this.container = container;
  }
  async init() {}
  render() {}
  start() {}
  stop() {}
}
export { Realm };
