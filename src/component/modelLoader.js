import { GLTFLoader } from "../../vendor/GLTFLoader.js";
import { MTLLoader } from "../../vendor/MTLLoader.js";
import { OBJLoader } from "../../vendor/OBJLoader.js";
import { handleProgress } from "./handleProgress.js";
async function loadGLTFModel(glbFile) {
  const loader = new GLTFLoader();
  return new Promise((resolve) => {
    loader.load(
      glbFile,
      (model) => {
        resolve(model);
      },
      (progress) => {
        handleProgress(progress, glbFile);
      },
    );
  });
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
