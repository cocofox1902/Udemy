function addition(...nombres) {
    let result = 0;
  nombres.forEach((nombre) => {
    result += nombre
  });
  console.log(result);
}

addition(4, 9, 23);
