import { createScene } from "../component/scene.js";
import { createCamera } from "../component/camera.js";
import { createRenderer } from "../system/renderer.js";
import { createCube } from "../component/cube.js";
import { createControls } from "../system/controls.js";
import { directLight } from "../component/light.js";
import { Resizer } from "../system/Resizer.js";
import { Loop } from "../system/Loop.js";
import { loadOBJModelWithMTL } from "../component/modelLoader.js";

class Realm {
  constructor(container) {
    this.container = container;

    this.camera = createCamera();
    this.camera.position.set(0, 0, 5);

    this.scene = createScene();

    const spotLight = directLight(10);
    spotLight.position.set(0, 0, 3);

    this.scene.add(spotLight);

    this.renderer = createRenderer();
    this.container.append(this.renderer.domElement);

    this.controls = createControls(this.camera, this.renderer.domElement);

    this.loop = new Loop(this.camera, this.scene, this.renderer);
    this.loop.updatables.push(this.controls);
    this.reszer = new Resizer(this.container, this.camera, this.renderer);
  }
  async init() {
    const cctv = await loadOBJModelWithMTL("../../assets/previews/", "camera.obj", "camera.mtl");
    cctv.rotation.y = 0.5;
    cctv.position.x = -0.5;
    this.scene.add(cctv);
  }
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
