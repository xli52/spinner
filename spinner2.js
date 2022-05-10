const animationArray = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']

const spin = function(time) {
  for (let t = 0; t < time; t += 200) {
    setTimeout(() => {
      process.stdout.write(animationArray[(t / 200) % 4]);
    }, t);

  }
}

spin(5000);