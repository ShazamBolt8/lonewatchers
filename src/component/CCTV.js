import { loadGLTFModel } from "../component/modelLoader.js";
class CCTV {
  constructor(role, scene, loop) {
    this.cctv = this.joint = null;
    this.role = role;
    this.scene = scene;
    this.loop = loop;
  }
  async loadCCTV() {
    return await loadGLTFModel("../../assets/previews/cctv_anim.glb");
  }
  async init() {
    const model = await this.loadCCTV();
    this.cctv = model.scene;
    this.joint = this.cctv.children[0].children[1].children[0];
    this.joint.rotation.set(0, 0, 0);
    this.cctv.scale.set(0.6, 0.6, 0.6);
    if (this.role == "left") {
      this.cctv.position.x = -1;
    }
    if (this.role == "right") {
      this.cctv.position.x = 1;
    }
  }
  toScene() {
    this.loop.updatables.push(this);
    this.scene.add(this.cctv);
  }
  tick(delta) {}
}
export { CCTV };
