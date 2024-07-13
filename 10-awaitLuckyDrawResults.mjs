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

async function luckyDrawResults() {
  const draw1result = await luckyDraw("Tina").catch((error) => console.error(error));

  const draw2result = await luckyDraw("Jorge").catch((error) => console.error(error));

  const draw3result = await luckyDraw("Julien").catch((error) => console.error(error));

  if (draw1result) console.log(draw1result);
  if (draw2result) console.log(draw2result);
  if (draw3result) console.log(draw3result);
}

luckyDrawResults();
