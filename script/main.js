import { Realm } from "../src/Realm/Realm.js";
async function main() {
  const container = document.getElementById("scene-container");
  const realm = new Realm(container);
  await realm.init();
  realm.start();
}

main().catch((err) => {
  realm.stop();
  console.error(err);
});
