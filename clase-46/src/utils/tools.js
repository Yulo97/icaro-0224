export const cortarString = (str) => {
  const nuevoString = str.substring(0, 100);
  return nuevoString + "...";
};
