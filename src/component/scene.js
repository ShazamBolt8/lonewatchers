import { Color, Scene } from "../../vendor/three/three.module.js";
function createScene() {
  const scene = new Scene();
  scene.background = new Color(0xff282828);
  return scene;
}
export { createScene };
