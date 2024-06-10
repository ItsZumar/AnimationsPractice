export const incrementStrNumber = (
  numStr: string,
  increment: number,
): string => {
  'worklet';

  let numList: number[] = numStr.split('').map(Number);

  let incrementList: number[] = increment
    .toString()
    .padStart(numList.length, '0')
    .split('')
    .map(Number);

  let carry: number = 0;

  for (let i = numList.length - 1; i >= 0; i--) {
    numList[i] += incrementList[i] + carry;
    carry = Math.floor(numList[i] / 10);
    numList[i] %= 10;
  }

  if (carry) {
    numList = [carry].concat(numList);
  }

  return numList.join('');
};
