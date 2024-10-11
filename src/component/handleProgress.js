let lastProgress = null;
let progressTimeout;

function handleProgress(xhr, file = "") {
  if (xhr.lengthComputable) {
    const logBar = document.getElementById("logger");
    const progress = Math.round((xhr.loaded / xhr.total) * 100, 2);
    file = file.split("/").pop();
    const log = `${file} ${progress}%`;
    logBar.textContent = log;
    if (lastProgress !== progress) {
      clearTimeout(progressTimeout);
      progressTimeout = setTimeout(() => {
        if (lastProgress === progress) {
          logBar.textContent = "";
        }
      }, 2000);
      lastProgress = progress;
    }
  }
}
export { handleProgress };
