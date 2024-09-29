import { AmbientLight, DirectionalLight, HemisphereLight } from "../../vendor/three/three.module.js";
function ambientLight(intensity = 1, color = 0xffffff) {
  const light = new AmbientLight(color, intensity);
  return light;
}
function directLight(intensity = 1, color = 0xffffff) {
  const light = new DirectionalLight(color, intensity);
  return light;
}
function hemisphereLight(intensity = 1, sky = "skyblue", gnd = "brown") {
  const light = new HemisphereLight(sky, gnd, intensity);
  return light;
}
export { ambientLight, directLight, hemisphereLight };
