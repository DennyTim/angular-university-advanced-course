export const TAB = 9;
export const LEFT_ARROW = 37;
export const RIGHT_ARROW = 39;
export const BACKSPACE = 8;
export const DELETE = 46;
export const SPECIAL_CHARACTERS = [ ' ', '/', '(', ')', '+', '\/', '-' ];

export function overWriteCharAtPosition(input: HTMLInputElement, position: number, key: string) {
  const currentValue = input.value;
  input.value = `${ currentValue.slice(0, position) }${ key }${ currentValue.slice(position + 1, currentValue.length) }`;
}
