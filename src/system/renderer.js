import { WebGLRenderer } from "../../vendor/three/three.module.js";
function createRenderer(){
	const renderer = new WebGLRenderer({ antialias: true, });
	renderer.useLegacyLights = true;
	return renderer;
}
export { createRenderer };