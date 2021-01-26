class calculator {
  static PI = 3.141592;

  static som(par1, par2) {
    return par1 + par2;
  }
  static verschil(par1, par2) {
    return par1 - par2;
  }
  static vermenigvuldigen(par1, par2) {
    return par1 * par2;
  }
  static delen(par1, par2) {
    return par1 / par2;
  }
}
console.log(calculator.som(3, 3)); // Dit moet 6 loggen
console.log(calculator.verschil(3, 2)); // Dit moet 1 loggen,
console.log(calculator.delen(6, 2)); // Dit moet 3 loggen
console.log(calculator.vermenigvuldigen(3, 3)); // Dit moet 9 loggen
console.log(calculator.PI); // Dit moet 3.141592 loggen
