export const RandomGenerator = (num1: number, num2: number): number => {
  return Math.floor(Math.random() * (num1 - num2) + num2);
};
