const keyLayout = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace"],
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", "'", "Enter"],
  ["z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "Shift"],
  [" "]
];

const specialKeys = ["Meta","Alt","Control","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];

const KEYS = {
  "0": {
    className: ["keyboard__key", "letters"]
  },
  "1": {
    className: ["keyboard__key", "letters"]
  },
  "2": {
    className: ["keyboard__key", "letters"]
  },
  "3": {
    className: ["keyboard__key", "letters"]
  },
  "4": {
    className: ["keyboard__key", "letters"]
  },
  "5": {
    className: ["keyboard__key", "letters"]
  },
  "6": {
    className: ["keyboard__key", "letters"]
  },
  "7": {
    className: ["keyboard__key", "letters"]
  },
  "8": {
    className: ["keyboard__key", "letters"]
  },
  "9": {
    className: ["keyboard__key", "letters"]
  },
  Backspace: {
    iconName: "keyboard_backspace",
    className: ["keyboard__key", "keyboard__key--wide"],
    nonError: true
  },
  q: {
    className: ["keyboard__key", "letters"]
  },
  w: {
    className: ["keyboard__key", "letters"]
  },
  e: {
    className: ["keyboard__key", "letters"]
  },
  r: {
    className: ["keyboard__key", "letters"]
  },
  t: {
    className: ["keyboard__key", "letters"]
  },
  y: {
    className: ["keyboard__key", "letters"]
  },
  u: {
    className: ["keyboard__key", "letters"]
  },
  i: {
    className: ["keyboard__key", "letters"]
  },
  o: {
    className: ["keyboard__key", "letters"]
  },
  p: {
    className: ["keyboard__key", "letters"]
  },
  CapsLock: {
    iconName: "keyboard_capslock",
    className: [
      "keyboard__key",
      "keyboard__key--wide",
      "keyboard__key--activatable"
    ],
    nonError: true
  },
  a: {
    className: ["keyboard__key", "letters"]
  },
  s: {
    className: ["keyboard__key", "letters"]
  },
  d: {
    className: ["keyboard__key", "letters"]
  },
  f: {
    className: ["keyboard__key", "letters"]
  },
  g: {
    className: ["keyboard__key", "letters"]
  },
  h: {
    className: ["keyboard__key", "letters"]
  },
  j: {
    className: ["keyboard__key", "letters"]
  },
  k: {
    className: ["keyboard__key", "letters"]
  },
  l: {
    className: ["keyboard__key", "letters"]
  },
  "'": {
    className: ["keyboard__key", "letters"]
  },
  Enter: {
    iconName: "keyboard_return",
    className: ["keyboard__key", "keyboard__key--wide"],
    nonError: true
  },
  z: {
    className: ["keyboard__key", "letters"]
  },
  x: {
    className: ["keyboard__key", "letters"]
  },
  c: {
    className: ["keyboard__key", "letters"]
  },
  v: {
    className: ["keyboard__key", "letters"]
  },
  b: {
    className: ["keyboard__key", "letters"]
  },
  n: {
    className: ["keyboard__key", "letters"]
  },
  m: {
    className: ["keyboard__key", "letters"]
  },
  ",": {
    className: ["keyboard__key", "letters"]
  },
  ".": {
    className: ["keyboard__key", "letters"]
  },
  "?": {
    className: ["keyboard__key", "letters"]
  },
  Shift: {
    iconName: "keyboard_arrow_up",
    className: ["keyboard__key", "keyboard__key--wide"],
    nonError: true
  },
  " ": {
    iconName: "space_bar",
    className: ["keyboard__key", "keyboard__key--extra-wide"]
  }
};
