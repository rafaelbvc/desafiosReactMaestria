export const url = "http://localhost:3000/products";

export const urlIDF = (id) => {

  const urlID = `http://localhost:3000/products/${id}`;

  return {urlID}
};
