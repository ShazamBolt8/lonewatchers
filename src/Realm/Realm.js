import { createScene } from "../component/scene.js";
import { createCamera } from "../component/camera.js";
import { createRenderer } from "../system/renderer.js";
import { createCube } from "../component/cube.js";
import { createControls } from "../system/controls.js";
import { directLight, hemisphereLight } from "../component/light.js";
import { Resizer } from "../system/Resizer.js";
import { Loop } from "../system/Loop.js";
import { loadGLTFModel } from "../component/modelLoader.js";
import { CCTV } from "../component/CCTV.js";
import { createStats } from "../component/createStats.js";

class Realm {
  constructor(container, orbitControls, rendererControls, fpsDisplay) {
    this.container = container;
    this.orbitControls = orbitControls;
    this.rendererControls = rendererControls;
    this.fpsDisplay = fpsDisplay;

    this.isMobile = window.navigator.userAgent.toLowerCase().includes("mobi");
    this.basePath = window.location.hostname.includes("github.io")
      ? `/${document.title.replace(" ", "").toLocaleLowerCase()}`
      : "";

    console.log(this.basePath);

    this.camera = createCamera();
    this.camera.position.set(0, 0, 5);

    this.scene = createScene(0xff4e6c9c);

    const spotLight1 = directLight(7);
    spotLight1.position.set(2, 0, 0);
    const spotLight2 = directLight(7);
    spotLight2.position.set(-2, 0, 0);

    if (this.isMobile) {
      this.camera.position.set(0, 0, 9);
      spotLight1.position.set(1.2, 0, 0);
      spotLight2.position.set(-1.2, 0, 0);
    }

    this.scene.add(spotLight1, spotLight2);

    this.renderer = createRenderer();
    this.container.append(this.renderer.domElement);

    this.loop = new Loop(this.camera, this.scene, this.renderer);

    this.controls = createControls(this.camera, this.renderer.domElement);

    this.stats = createStats(this.fpsDisplay);
    this.loop.updatables.push(this.stats);

    this.resizer = new Resizer(this.container, this.camera, this.renderer);
  }
  enableControls() {
    this.orbitControls.innerText = this.controls.enabled
      ? "Controls: Enabled"
      : "Controls: Disabled";
    this.orbitControls.addEventListener("click", () => {
      if (this.controls.enabled) {
        this.controls.enabled = false;
        this.orbitControls.innerText = "Controls: Disabled";
      } else {
        this.controls.enabled = true;
        this.orbitControls.innerText = "Controls: Enabled";
      }
    });
    this.rendererControls.innerText = this.rendererControls.useLegacyLights
      ? "Legacy Lights"
      : "No Legacy Lights";
    this.rendererControls.addEventListener("click", () => {
      if (this.renderer.useLegacyLights) {
        this.rendererControls.innerText = "No Legacy Lights";
        this.renderer.useLegacyLights = false;
      } else {
        this.rendererControls.innerText = "Legacy Lights";
        this.renderer.useLegacyLights = true;
      }
    });
  }
  async init() {
    const rightCamera = new CCTV("right", this.scene, this.loop, this.isMobile, this.basePath);
    const leftCamera = new CCTV("left", this.scene, this.loop, this.isMobile, this.basePath);
    await rightCamera.init();
    await leftCamera.init();
    rightCamera.toScene();
    leftCamera.toScene();
    this.enableControls();
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
