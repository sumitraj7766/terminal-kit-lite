export interface ProgressOptions {
  width?: number;
  completeChar?: string;
  incompleteChar?: string;
  showPercentage?: boolean;
}

export class ProgressBar {
  private readonly total: number;
  private readonly width: number;
  private readonly completeChar: string;
  private readonly incompleteChar: string;
  private readonly showPercentage: boolean;

  private current = 0;

  constructor(
    total: number,
    options: ProgressOptions = {}
  ) {
    if (total <= 0) {
      throw new Error("Progress total must be greater than 0");
    }

    this.total = total;
    this.width = options.width ?? 30;
    this.completeChar = options.completeChar ?? "█";
    this.incompleteChar = options.incompleteChar ?? "░";
    this.showPercentage = options.showPercentage ?? true;
  }

  update(value: number): this {
    this.current = Math.max(
      0,
      Math.min(value, this.total)
    );

    this.render();

    return this;
  }

  increment(amount = 1): this {
    return this.update(this.current + amount);
  }

  complete(): this {
    return this.update(this.total);
  }

  reset(): this {
    return this.update(0);
  }

  get value(): number {
    return this.current;
  }

  get percentage(): number {
    return Math.round(
      (this.current / this.total) * 100
    );
  }

  private render(): void {
    const percentage = this.percentage;

    const completed = Math.round(
      (percentage / 100) * this.width
    );

    const remaining = this.width - completed;

    const bar =
      this.completeChar.repeat(completed) +
      this.incompleteChar.repeat(remaining);

    const percentageText = this.showPercentage
      ? ` ${percentage}%`
      : "";

    process.stdout.write(
      `\r\x1b[2K[${bar}]${percentageText}`
    );

    if (percentage >= 100) {
      process.stdout.write("\n");
    }
  }
}

export function progress(
  total: number,
  options?: ProgressOptions
): ProgressBar {
  return new ProgressBar(total, options);
}