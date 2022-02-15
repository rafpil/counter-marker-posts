const Counter = (nameInput, position, startInput, finishInput) => {

  let km = new Array(10).fill(0, 0, 10);
  let he = new Array(10).fill(0, 0, 10);
  let id = '_' + Math.random().toString(36).substring(2, 9);
  let start = parseFloat(startInput.replace(/,|\+/g, "."));
  let finish = parseFloat(finishInput.replace(/,|\+/g, "."));

  do {
    for (let i = 0; i < (start - (start % 1)).toString().length; i++) {
      km[(start - (start % 1)).toString().charAt(i)] += 1;
    }

    he[(start % 1).toFixed(1) * 10] += 1;

    start = (start * 10 + 0.1 * 10) / 10;
  } while (start.toFixed(1) !== (finish + 0.1).toFixed(1));

  return {id: id, position: position, name: nameInput, km: km, he: he, start: startInput, finish: finishInput};
};

export default Counter;

export const AddToTotal = (itemToAdd, total) => {
  let km = itemToAdd.km.map((el, index) => total.km[index] += el);
  let he = itemToAdd.he.map((el, index) => total.he[index] += el);
  return {name: 'Suma', km, he};
};

export const RemoveFromTotal = (itemToRemove, total) => {
  let km = itemToRemove.km.map((el, index) => total.km[index] -= el);
  let he = itemToRemove.he.map((el, index) => total.he[index] -= el);
  return {name: 'Suma', km, he};
};