import { createScene } from "../component/scene.js";
import { createCamera } from "../component/camera.js";
import { createRenderer } from "../system/renderer.js";
import { createCube } from "../component/cube.js";
import { Resizer } from "../system/Resizer.js";
import { Loop } from "../system/Loop.js";

class Realm {
  constructor(container) {
    this.container = container;
    this.camera = createCamera();
    this.scene = createScene();

    //add a basic cube
    this.cube = createCube();
    this.cube.rotateY(2); //for perspective
    this.scene.add(this.cube);

    this.renderer = createRenderer();
    this.container.append(this.renderer.domElement);

    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.reszer = new Resizer(this.container, this.camera, this.renderer);
  }
  async init() {}
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  start() {
    this.loop.start();
  }
  stop() {
    this.loop.stop();
  }
}
export { Realm };
