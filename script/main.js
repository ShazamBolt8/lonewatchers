import { Realm } from "../src/Realm/Realm.js";
async function main() {
  const container = document.getElementById("scene-container");
  const orbitControls = document.getElementById("orbitControls");
  const fpsDisplay = document.getElementById("fpsDisplay");
  const rendererControls = document.getElementById("rendererControls");
  const realm = new Realm(container, orbitControls, rendererControls, fpsDisplay);
  try {
    await realm.init();
    realm.start();
  } catch (error) {
    console.error(error);
    realm.stop();
  }
}
main();
