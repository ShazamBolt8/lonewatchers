function handleProgress(xhr, message = "") {
  if (xhr.lengthComputable) {
    const logBar = document.getElementById("log-bar");
    const progress = (xhr.loaded / xhr.total) * 100;
    const log = `${message} ${Math.round(progress, 2)}%`;
    logBar.textContent = log;
    if (progress === 100) {
      setTimeout(() => {
        logBar.textContent = "";
      }, 1000);
    }
  }
}
export { handleProgress };
