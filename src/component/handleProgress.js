function handleProgress(xhr, message = "") {
  if (xhr.lengthComputable) {
    const progress = (xhr.loaded / xhr.total) * 100;
    const log = `${message} ${Math.round(progress, 2)}%`;
    console.log(log.trim());
  }
}
export { handleProgress };
