const pow = (num1, num2) => {
    if (num2 != 1) {
        return num1 *= pow(num1, num2 - 1);
      } else {
        return num1;
      }
}

pow(2, 3)