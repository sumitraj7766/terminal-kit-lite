export interface SpinnerOptions {
  interval?: number;
  frames?: string[];
}

const DEFAULT_FRAMES = [
  "⠋",
  "⠙",
  "⠹",
  "⠸",
  "⠼",
  "⠴",
  "⠦",
  "⠧",
  "⠇",
  "⠏"
];

export class Spinner {
  private text: string;
  private interval: number;
  private frames: string[];
  private timer: NodeJS.Timeout | null = null;
  private frameIndex = 0;
  private running = false;

  constructor(
    text: string,
    options: SpinnerOptions = {}
  ) {
    this.text = text;
    this.interval = options.interval ?? 80;
    this.frames = options.frames ?? DEFAULT_FRAMES;
  }

  start(): this {
    if (this.running) {
      return this;
    }

    this.running = true;
    this.frameIndex = 0;

    this.render();

    this.timer = setInterval(() => {
      this.frameIndex =
        (this.frameIndex + 1) % this.frames.length;

      this.render();
    }, this.interval);

    return this;
  }

  stop(message?: string): this {
    if (!this.running) {
      return this;
    }

    this.running = false;

    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }

    this.clearLine();

    if (message) {
      process.stdout.write(`✓ ${message}\n`);
    }

    return this;
  }

  update(text: string): this {
    this.text = text;

    if (this.running) {
      this.render();
    }

    return this;
  }

  private render(): void {
    this.clearLine();

    const frame = this.frames[this.frameIndex];

    process.stdout.write(`${frame} ${this.text}`);
  }

  private clearLine(): void {
    process.stdout.write("\r\x1b[2K");
  }
}

export function spinner(
  text: string,
  options?: SpinnerOptions
): Spinner {
  return new Spinner(text, options);
}