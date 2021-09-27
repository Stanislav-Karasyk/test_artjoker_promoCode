function promoCode(code) {
  let codeArr = numberArr(code);

  if (codeArr.length !== 8) return 0;

  let oddSum = 0;
  let evenSum = 0;
  let oddArr = [];
  let evenArr = [];

  for (let i = 0; i < codeArr.length; i++) {
    isOdd(codeArr[i]) ? (oddSum += codeArr[i]) : (evenSum += codeArr[i]);

    if (isOdd(codeArr[i]) && isOdd(codeArr[i + 1])) {
      isOdd(codeArr[i + 1])
        ? (oddSum += codeArr[i + 1])
        : (evenSum += codeArr[i + 1]);

      oddArr.push(codeArr[i]);
      oddArr.push(codeArr[i + 1]);
      i++;
    } else if (!isOdd(codeArr[i])) {
      evenArr.push(codeArr[i]);
    }
  }

  if (oddArr[0] < oddArr[1] && oddArr[2] < oddArr[3] && evenArr.length)
    return 2000;
  else if (
    oddArr[0] &&
    oddArr[1] &&
    oddArr[2] &&
    oddArr[3] &&
    evenArr.length &&
    evenSum > oddSum
  )
    return 1000;
  else if (evenSum > oddSum) return 100;

  return 0;

  function isOdd(number) {
    return number % 2 !== 0;
  }

  function numberArr(number) {
    if (typeof number !== "number") return [];

    let arr = [];

    do {
      arr.push(number % 10);
      number /= 10;
    } while (number >= 1);

    return arr.map((digit) => Math.trunc(digit)).reverse();
  }
}

console.log(promoCode(37283988)); // 2000
console.log(promoCode(73289388)); // 1000
console.log(promoCode(48183276)); // 100
console.log(promoCode(84533920)); // 0
