import { Realm } from "../src/Realm/Realm.js";
async function main() {
  const container = document.getElementById("scene-container");
  const realm = new Realm(container);
  try {
    await realm.init();
    realm.start();
  } catch (error) {
    console.error(error);
    realm.stop();
  }
}
main();