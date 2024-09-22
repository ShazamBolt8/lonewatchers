import { OrbitControls } from "../../vendor/three/OrbitControls.js";
function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = false;
  controls.autoRotate = false;
  controls.maxDistance = 50;
  controls.minDistance = 0;
  controls.maxPolarAngle = Math.PI / 2.2;
  controls.tick = (delta) => {
    controls.update();
  };
  return controls;
}
export { createControls };
