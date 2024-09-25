import { GLTFLoader } from "../../vendor/three/GLTFLoader.js";
import { MTLLoader } from "../../vendor/three/MTLLoader.js";
import { OBJLoader } from "../../vendor/three/OBJLoader.js";
import { handleProgress } from "./handleProgress.js";
async function loadGLTFModel(models) {
  const loader = new GLTFLoader();
  let result = [];
  const resultData = await Promise.all(models.map((model) => loader.loadAsync(model)));
  resultData.map((model) => {
    result.push(model.scene.children[0]);
  });
  return result;
}
function loadMTL(mtlPath, mtlFile) {
  return new Promise((resolve) => {
    new MTLLoader().setPath(mtlPath).load(
      mtlFile,
      function (materials) {
        materials.preload();
        resolve(materials);
      },
      (progress) => {
        handleProgress(progress, mtlFile);
      },
    );
  });
}
function loadOBJ(objPath, objFile, materials) {
  return new Promise((resolve) => {
    new OBJLoader()
      .setMaterials(materials)
      .setPath(objPath)
      .load(
        objFile,
        function (object) {
          resolve(object);
        },
        (progress) => {
          handleProgress(progress, objFile);
        },
      );
  });
}
async function loadOBJModelWithMTL(filePath, objFile, mtlFile) {
  const materials = await loadMTL(filePath, mtlFile);
  const object = await loadOBJ(filePath, objFile, materials);
  return object;
}
export { loadGLTFModel, loadMTL, loadOBJ, loadOBJModelWithMTL };
