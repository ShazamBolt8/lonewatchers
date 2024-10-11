import { loadGLTFModel } from "./modelLoader.js";
import { AnimationMixer } from "../../vendor/three.module.js";

class CCTV {
  constructor(role, scene, loop, isMobile) {
    this.cctv = this.joint = this.mixer = null;
    this.role = role;
    this.scene = scene;
    this.loop = loop;
    this.isMobile = isMobile;
    this.animations = [];
  }
  async loadCCTV() {
    return await loadGLTFModel("../../assets/cctv_anim.glb");
  }
  async init() {
    const model = await this.loadCCTV();
    this.cctv = model.scene;
    this.mixer = new AnimationMixer(this.cctv);
    this.animations.push(...model.animations);
    this.joint = this.cctv.children[0].children[1].children[0];
    this.joint.rotation.set(0, 0, 0);
    this.cctv.scale.set(0.6, 0.6, 0.6);
    const positionOffsets = {
      left: this.isMobile ? -0.8 : -1.5,
      right: this.isMobile ? 0.8 : 1.5,
    };
    this.cctv.position.x = positionOffsets[this.role];
    if (this.isMobile) {
      this.cctv.scale.set(0.5, 0.5, 0.5);
    }
  }
  toScene() {
    this.loop.updatables.push(this);
    this.scene.add(this.cctv);
  }
  tick(delta) {
    if (this.role === "left") {
      this.mixer.clipAction(this.animations[0]).play();
      this.mixer.update(delta);
    }
    if (this.role === "right") {
      this.mixer.clipAction(this.animations[1]).play();
      this.mixer.update(delta);
    }
  }
}
export { CCTV };
