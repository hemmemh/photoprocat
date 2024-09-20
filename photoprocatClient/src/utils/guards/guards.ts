export function isNumberArray(arr: (string | number)[]): arr is number[] {
  return arr.every((item) => typeof item === 'number');
}

export function isStringArray(arr: (string | number)[]): arr is string[] {
  return arr.every((item) => typeof item === 'string');
}
