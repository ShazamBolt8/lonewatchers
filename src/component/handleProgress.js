function handleProgress(xhr, message = "") {
  if (xhr.lengthComputable) {
    const logBar = document.getElementById("logger");
    const progress = (xhr.loaded / xhr.total) * 100;
    const log = `${message} ${Math.round(progress, 2)}%`;
    logBar.textContent = log;
    if (progress >= 200) {
      setTimeout(() => {
        logBar.textContent = "";
      }, 2000);
    }
  }
}
export { handleProgress };
