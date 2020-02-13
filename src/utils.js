export default (min, max) => {
  const randNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randNum);
};// чем больше диапазон между min и max, тем сложнее игра.
