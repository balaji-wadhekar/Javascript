function faultyCalculator(a, op, b) {
  let correctResult;

  switch (op) {
    case "+":
      correctResult = a + b;
      break;
    case "-":
      correctResult = a - b;
      break;
    case "*":
      correctResult = a * b;
      break;
    case "/":
      if (b === 0) return "Error: Division by zero";
      correctResult = a / b;
      break;
    default:
      return "Invalid operator";
  }

  // 10% faulty output
  if (Math.random() < 0.1) {
    return correctResult + Math.floor(Math.random() * 10 + 1);
  }

  return correctResult;
}

// Input
const a = Number(prompt("Enter first number:"));
const op = prompt("Enter operator (+, -, *, /):");
const b = Number(prompt("Enter second number:"));

console.log("Result:", faultyCalculator(a, op, b));
