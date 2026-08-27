import {
  writeLine,
  isTTY
} from "./dist/index.js";

writeLine("terminal-kit-lite terminal utilities");

writeLine(
  `Running in TTY: ${isTTY()}`
);