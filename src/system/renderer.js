import { WebGLRenderer } from "../../vendor/three/three.module.js";
function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.useLegacyLights = false;
  return renderer;
}
export { createRenderer };
