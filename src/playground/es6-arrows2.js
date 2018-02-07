const test = function(x) {
  return x * 2;
}
const test2 = (x) => x *2;
console.log(test(50));
console.log(test2(30));

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());
