function createStats(fpsDisplay) {
  const stats = {};
  let lastTime = performance.now();
  let frameCount = 0;
  stats.tick = () => {
    const currentTime = performance.now();
    frameCount++;
    if (currentTime - lastTime >= 1000) {
      const fps = frameCount;
      frameCount = 0;
      lastTime = currentTime;
      fpsDisplay.innerText = `FPS: ${fps}`;
    }
  };
  return stats;
}

export { createStats };
