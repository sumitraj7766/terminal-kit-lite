export function write(text: string): void {
  process.stdout.write(text);
}

export function writeLine(text = ""): void {
  process.stdout.write(`${text}\n`);
}

export function clearLine(): void {
  write("\r\x1b[2K");
}

export function moveCursorUp(lines = 1): void {
  if (lines <= 0) {
    return;
  }

  write(`\x1b[${lines}A`);
}

export function moveCursorDown(lines = 1): void {
  if (lines <= 0) {
    return;
  }

  write(`\x1b[${lines}B`);
}

export function cursorTo(column: number, row?: number): void {
  if (row !== undefined) {
    write(`\x1b[${row};${column}H`);
    return;
  }

  write(`\x1b[${column}G`);
}

export function hideCursor(): void {
  write("\x1b[?25l");
}

export function showCursor(): void {
  write("\x1b[?25h");
}

export function isTTY(): boolean {
  return Boolean(process.stdout.isTTY);
}