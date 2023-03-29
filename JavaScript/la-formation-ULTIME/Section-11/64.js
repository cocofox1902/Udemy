function somme(max) {
  if (max == 1) {
    return (1)
  }
  return max + somme(max - 1);
}

console.log(somme(3));
