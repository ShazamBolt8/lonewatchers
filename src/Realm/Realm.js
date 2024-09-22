import { createScene } from "../component/scene.js";
import { createCamera } from "../component/camera.js";
import { createRenderer } from "../system/renderer.js";
import { createCube } from "../component/cube.js";
import { createControls } from "../system/controls.js";
import { directLight } from "../component/light.js";
import { Resizer } from "../system/Resizer.js";
import { Loop } from "../system/Loop.js";

class Realm {
  constructor(container) {
    this.container = container;
    this.camera = createCamera();
    this.scene = createScene();

    const cube = createCube();
    cube.rotateY(0.6);
    cube.rotateX(0.5);
    const spotLight = directLight(8);
    spotLight.position.set(0, 30, 20);

    this.scene.add(cube, spotLight);

    this.renderer = createRenderer();
    this.container.append(this.renderer.domElement);

    this.controls = createControls(this.camera, this.renderer.domElement);

    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.loop.updatables.push(this.controls);
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
