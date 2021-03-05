import { rotateArray } from "./task";

function compareArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let index = 0; index < arr1.length; index++) {
    if (arr1[index] !== arr2[index]) {
      return false;
    }
  }

  return true;
}

describe("rotateArray", () => {
  it("exist", () => {
    expect(!!rotateArray).toBeTruthy();
  });

  it("should rotate [1, 0] with 1 step", () => {
    const ethalonArray = [1, 0];
    const finalArray = rotateArray(ethalonArray, 1);
    expect(finalArray[0]).toBe(0);
    expect(finalArray[1]).toBe(1);
  });

  it("should rotate [1, 0] with 2 step", () => {
    const ethalonArray = [1, 0];
    const finalArray = rotateArray(ethalonArray, 2);
    expect(finalArray[0]).toBe(0);
  });

  it("should rotate [1, 0, 78, 74] with 1 step", () => {
    const ethalonArray = [1, 0, 78, 74];
    const finalArray = rotateArray(ethalonArray, 1);
    expect(finalArray[0]).toBe(74);
    expect(finalArray[1]).toBe(1);
  });

  it("should correctly run 1 row of cases", () => {
    expect(
      compareArray(rotateArray([1, 2, 3, 4, 5, 6], 1), [6, 1, 2, 3, 4, 5])
    ).toBeTruthy();
    expect(
      compareArray(rotateArray([1, 2, 3, 4, 5, 6], 2), [6, 1, 2, 3, 4])
    ).toBeTruthy();
    expect(
      compareArray(rotateArray([1, 2, 3, 4, 5, 6], 3), [4, 6, 1, 2, 3])
    ).toBeTruthy();
    expect(
      compareArray(rotateArray([1, 2, 3, 4, 5, 6], 4), [4, 6, 1, 2])
    ).toBeTruthy();
    expect(
      compareArray(rotateArray([1, 2, 3, 4, 5, 6], 5), [2, 4, 6, 1])
    ).toBeTruthy();
    expect(
      compareArray(rotateArray([1, 2, 3, 4, 5, 6], 6), [2, 4, 6])
    ).toBeTruthy();
  });

  it("should correctly run 2 row of cases", () => {
    expect(
      compareArray(rotateArray([1, 2, 3, 4, 5, 6], 7), [6, 2, 4])
    ).toBeTruthy();
    expect(
      compareArray(rotateArray([1, 2, 3, 4, 5, 6], 8), [4, 6, 2])
    ).toBeTruthy();
    expect(
      compareArray(rotateArray([1, 2, 3, 4, 5, 6], 9), [2, 4, 6])
    ).toBeTruthy();
  });

  it("should correctly run 3 row of cases", () => {
    expect(
      compareArray(rotateArray([1, 2, 3, 4, 5, 6], -1), [1, 2, 3, 4, 5, 6])
    ).toBeTruthy();
    expect(compareArray(rotateArray([], 10), [])).toBeTruthy();
    expect(
      compareArray(rotateArray([1, 2, 3, 4, 5, 6], 333), [2, 4, 6])
    ).toBeTruthy();
  });
});
