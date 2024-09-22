import { GLTFLoader } from "../../vendor/three/GLTFLoader.js";
async function loadGLTFModel(models) {
  const loader = new GLTFLoader();
  let result = [];
  const resultData = await Promise.all(models.map((model) => loader.loadAsync(model)));
  resultData.map((model) => {
    result.push(model.scene.children[0]);
  });
  return result;
}
export { loadGLTFModel };