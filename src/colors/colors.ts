import { isTTY } from "../utils/terminal.js";

type ColorFunction = {
  (text: string): string;
  enabled: boolean;
};

const ANSI = {
  reset: "\x1b[0m",

  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",

  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",

  gray: "\x1b[90m",

  brightRed: "\x1b[91m",
  brightGreen: "\x1b[92m",
  brightYellow: "\x1b[93m",
  brightBlue: "\x1b[94m",
  brightMagenta: "\x1b[95m",
  brightCyan: "\x1b[96m",
  brightWhite: "\x1b[97m",

  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m"
} as const;

type StyleName = keyof typeof ANSI;

const colorEnabled =
  process.env.NO_COLOR === undefined &&
  isTTY();

function createStyle(
  code: string
): ColorFunction {
  const fn = ((text: string) => {
    if (!fn.enabled) {
      return text;
    }

    return `${code}${text}${ANSI.reset}`;
  }) as ColorFunction;

  fn.enabled = colorEnabled;

  return fn;
}

const colors = {} as Record<
  StyleName,
  ColorFunction
>;

for (const [name, code] of Object.entries(ANSI)) {
  if (name === "reset") {
    continue;
  }

  colors[name as StyleName] =
    createStyle(code);
}

export { colors };