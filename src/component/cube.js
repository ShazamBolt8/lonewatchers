import { BoxGeometry, Mesh, MeshStandardMaterial } from "../../vendor/three.module.js";
function createCube(color = 0xff525252, x = 2, y = 2, z = 2) {
  const geometry = new BoxGeometry(x, y, z);
  const material = new MeshStandardMaterial({ color: color });
  const cube = new Mesh(geometry, material);
  return cube;
}
export { createCube };
