const Counter = (nameInput, startInput, finishInput) => {

  let km = new Array(10).fill(0, 0, 10);
  let he = new Array(10).fill(0, 0, 10);
 
  let start = parseFloat(startInput.replace(/,|\+/g, "."));
  let finish = parseFloat(finishInput.replace(/,|\+/g, "."));

  do {
    for (let i = 0; i < (start - (start % 1)).toString().length; i++) {
      km[(start - (start % 1)).toString().charAt(i)] += 1;
    }

    he[(start % 1).toFixed(1) * 10] += 1;

    start = (start * 10 + 0.1 * 10) / 10;
  } while (start.toFixed(1) !== (finish + 0.1).toFixed(1));

  return {name: nameInput, km, he};
};

export default Counter;
