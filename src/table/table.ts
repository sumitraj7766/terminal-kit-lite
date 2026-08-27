export interface TableOptions {
  border?: "single" | "double" | "rounded";
  padding?: number;
  header?: boolean;
}

interface BorderStyle {
  topLeft: string;
  topRight: string;
  bottomLeft: string;
  bottomRight: string;

  left: string;
  right: string;
  vertical: string;

  top: string;
  bottom: string;
  middle: string;

  leftMiddle: string;
  rightMiddle: string;
  middleMiddle: string;
}

const BORDERS: Record<
  NonNullable<TableOptions["border"]>,
  BorderStyle
> = {
  single: {
    topLeft: "┌",
    topRight: "┐",
    bottomLeft: "└",
    bottomRight: "┘",

    left: "│",
    right: "│",
    vertical: "│",

    top: "─",
    bottom: "─",
    middle: "─",

    leftMiddle: "├",
    rightMiddle: "┤",
    middleMiddle: "┼"
  },

  double: {
    topLeft: "╔",
    topRight: "╗",
    bottomLeft: "╚",
    bottomRight: "╝",

    left: "║",
    right: "║",
    vertical: "║",

    top: "═",
    bottom: "═",
    middle: "═",

    leftMiddle: "╠",
    rightMiddle: "╣",
    middleMiddle: "╬"
  },

  rounded: {
    topLeft: "╭",
    topRight: "╮",
    bottomLeft: "╰",
    bottomRight: "╯",

    left: "│",
    right: "│",
    vertical: "│",

    top: "─",
    bottom: "─",
    middle: "─",

    leftMiddle: "├",
    rightMiddle: "┤",
    middleMiddle: "┼"
  }
};

export function table(
  rows: string[][],
  options: TableOptions = {}
): string {
  if (rows.length === 0) {
    return "";
  }

  const border = BORDERS[options.border ?? "single"];
  const padding = options.padding ?? 1;

  const columnCount = Math.max(
    ...rows.map(row => row.length)
  );

  const normalizedRows = rows.map(row => {
    const normalized = [...row];

    while (normalized.length < columnCount) {
      normalized.push("");
    }

    return normalized;
  });

  const widths = Array.from(
    { length: columnCount },
    (_, columnIndex) => {
      return Math.max(
        ...normalizedRows.map(
          row => row[columnIndex].length
        )
      );
    }
  );

  const separator = (
    left: string,
    middle: string,
    right: string,
    horizontal: string
  ): string => {
    return (
      left +
      widths
        .map(width =>
          horizontal.repeat(
            width + padding * 2
          )
        )
        .join(middle) +
      right
    );
  };

  const formatRow = (row: string[]): string => {
    return (
      border.vertical +
      row
        .map((cell, index) => {
          const rightPadding =
            " ".repeat(
              widths[index] - cell.length
            );

          return (
            " ".repeat(padding) +
            cell +
            rightPadding +
            " ".repeat(padding)
          );
        })
        .join(border.vertical) +
      border.vertical
    );
  };

  const output: string[] = [];

  output.push(
    separator(
      border.topLeft,
      border.top,
      border.topRight,
      border.top
    )
  );

  normalizedRows.forEach((row, index) => {
    output.push(formatRow(row));

    if (
      index === 0 &&
      options.header !== false &&
      normalizedRows.length > 1
    ) {
      output.push(
        separator(
          border.leftMiddle,
          border.middleMiddle,
          border.rightMiddle,
          border.middle
        )
      );
    }
  });

  output.push(
    separator(
      border.bottomLeft,
      border.bottom,
      border.bottomRight,
      border.bottom
    )
  );

  return output.join("\n");
}