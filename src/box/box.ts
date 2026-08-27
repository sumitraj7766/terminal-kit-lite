export interface BoxOptions {
  padding?: number;
  width?: number;
  border?: "single" | "double" | "rounded";
}

interface BorderStyle {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;
  horizontal: string;
  vertical: string;
}

const BORDERS: Record<
  NonNullable<BoxOptions["border"]>,
  BorderStyle
> = {
  single: {
    topLeft: "┌",
    topRight: "┐",
    bottomLeft: "└",
    bottomRight: "┘",
    horizontal: "─",
    vertical: "│"
  },

  double: {
    topLeft: "╔",
    topRight: "╗",
    bottomLeft: "╚",
    bottomRight: "╝",
    horizontal: "═",
    vertical: "║"
  },

  rounded: {
    topLeft: "╭",
    topRight: "╮",
    bottomLeft: "╰",
    bottomRight: "╯",
    horizontal: "─",
    vertical: "│"
  }
};

export function box(
  text: string,
  options: BoxOptions = {}
): string {
  const padding = options.padding ?? 1;
  const border = BORDERS[options.border ?? "single"];

  const lines = text.split("\n");

  const contentWidth = Math.max(
    ...lines.map(line => line.length)
  );

  const width =
    options.width ??
    contentWidth + padding * 2;

  if (width < padding * 2 + 1) {
    throw new Error(
      "Box width is too small for the configured padding."
    );
  }

  const innerWidth = width - padding * 2;

  const top =
    border.topLeft +
    border.horizontal.repeat(width) +
    border.topRight;

  const bottom =
    border.bottomLeft +
    border.horizontal.repeat(width) +
    border.bottomRight;

  const emptyPadding = " ".repeat(padding);

  const content = lines.map(line => {
    const trimmed = line.slice(0, innerWidth);

    const rightPadding =
      " ".repeat(innerWidth - trimmed.length);

    return (
      border.vertical +
      emptyPadding +
      trimmed +
      rightPadding +
      emptyPadding +
      border.vertical
    );
  });

  return [
    top,
    ...content,
    bottom
  ].join("\n");
}