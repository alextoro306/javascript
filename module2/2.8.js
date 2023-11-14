function concat(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  }
  const strings = ["Johnny", "DeeDee", "Joey", "Marky"];
  const concatenated = concat(strings);
  document.write(concatenated);