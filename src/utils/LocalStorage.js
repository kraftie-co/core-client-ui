const load = (key) => {
  return localStorage.getItem(key);
};

const save = (key, value) => {
  let valueAsString;
  try {
    valueAsString = JSON.stringify(value);
  } catch (error) {
    console.error(error);
  }
  localStorage.setItem(key, valueAsString);
};

const remove = (key) => {
  localStorage.removeItem(key);
};

export { load, save, remove };
