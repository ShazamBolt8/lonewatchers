import { Color, Scene } from "../../vendor/three/three.module.js";
function createScene(color = 0xff282828) {
  const scene = new Scene();
  scene.background = new Color(color);
  return scene;
}
export { createScene };
