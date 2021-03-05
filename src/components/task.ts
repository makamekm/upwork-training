/*
  for a given array of integers,
  rotate the array to the right for the specified amount of steps,
  discarding any odd numbers on the way
*/

function rotateArrayRecursive(integers: number[], steps: number): number[] {
  if (steps < 1) {
    return integers;
  }

  const nextValue = integers[integers.length - 1];

  if (nextValue % 2 === 0) {
    integers = [nextValue, ...integers.slice(0, integers.length - 1)];
  } else {
    integers = [...integers.slice(0, integers.length - 1)];
  }

  return rotateArrayRecursive(integers, steps - 1);
}

export function rotateArray(integers: number[], steps: number): number[] {
  steps = Math.max(0, steps);
  const minimalLength = integers.length || 1;
  steps = Math.min(steps, (steps % minimalLength) + minimalLength);
  return rotateArrayRecursive(integers, steps);
}
