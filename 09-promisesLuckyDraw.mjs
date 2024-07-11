function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("Joe")
  .then((win1) => console.log(win1))
  .catch((beat1) => console.log(beat1))
  .then(() => luckyDraw("Caroline"))
  .then((win2) => console.log(win2))
  .catch((beat2) => console.log(beat2))
  .then(() => luckyDraw("Sabrina"))
  .then((win3) => console.log(win3))
  .catch((beat3) => console.log(beat3));
