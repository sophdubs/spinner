let animations = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|  '];
let initialTime = 100;

for (let i = 0; i < animations.length; i++) {
  setTimeout(() => {
    process.stdout.write(animations[i]);
  }, initialTime + (i * 200));
};