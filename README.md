# terminal-kit-lite

[![npm version](https://img.shields.io/npm/v/terminal-kit-lite.svg)](https://www.npmjs.com/package/terminal-kit-lite)
[![npm downloads](https://img.shields.io/npm/dm/terminal-kit-lite.svg)](https://www.npmjs.com/package/terminal-kit-lite)
[![npm license](https://img.shields.io/npm/l/terminal-kit-lite.svg)](https://www.npmjs.com/package/terminal-kit-lite)
[![GitHub stars](https://img.shields.io/github/stars/sumitraj7766/terminal-kit-lite.svg)](https://github.com/sumitraj7766/terminal-kit-lite)
[![GitHub issues](https://img.shields.io/github/issues/sumitraj7766/terminal-kit-lite.svg)](https://github.com/sumitraj7766/terminal-kit-lite)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)

> A lightweight, zero-dependency terminal UI toolkit for building clean and beautiful Node.js CLI applications.

**terminal-kit-lite** provides simple utilities for terminal applications without requiring a large framework.

Build better command-line interfaces with colors, boxes, tables, spinners, progress bars, and terminal utilities.

---

## ✨ Features

- 🎨 Terminal colors and text styles
- 📦 Unicode terminal boxes
- 📊 Simple terminal tables
- ⏳ Loading spinners
- 📈 Progress bars
- 🖥️ Terminal environment utilities
- 🔷 Full TypeScript support
- 📦 ESM support
- 🚀 Zero runtime dependencies
- ⚡ Lightweight package
- 🧩 Simple API
- 🛠️ Works with modern Node.js applications

---

## 📦 Installation

Install the package using npm:

```bash
npm install terminal-kit-lite

Or with pnpm:

pnpm add terminal-kit-lite

Or with yarn:

yarn add terminal-kit-lite
🚀 Quick Start
import {
  colors,
  box,
  table,
  spinner,
  progress
} from "terminal-kit-lite";

You can immediately start using the utilities in your Node.js application.

🎨 Colors

Add colors and text styles to your terminal output.

import { colors } from "terminal-kit-lite";

console.log(colors.red("Error"));
console.log(colors.green("Success"));
console.log(colors.yellow("Warning"));
console.log(colors.blue("Information"));
console.log(colors.magenta("Magenta"));
console.log(colors.cyan("Cyan"));
Text styles
console.log(colors.bold("Bold text"));
console.log(colors.dim("Dim text"));
console.log(colors.underline("Underlined text"));
Bright colors
console.log(colors.brightRed("Bright red"));
console.log(colors.brightGreen("Bright green"));
console.log(colors.brightCyan("Bright cyan"));
Background colors
console.log(colors.bgRed(" Red background "));
console.log(colors.bgGreen(" Green background "));
console.log(colors.bgBlue(" Blue background "));
📦 Box

Create clean Unicode boxes around terminal content.

import { box } from "terminal-kit-lite";

console.log(
  box("Hello World")
);

Output:

┌─────────────┐
│ Hello World │
└─────────────┘

This is useful for:

CLI headers
Status messages
Information panels
Menus
Command-line dashboards
📊 Tables

Display structured information in a clean terminal table.

import { table } from "terminal-kit-lite";

console.log(
  table([
    ["Name", "Department", "Batch"],
    ["Pranav", "CSE", "2024"],
    ["Anup", "Mechanical", "2024"],
    ["Aman", "CSE", "2025"]
  ])
);

Output:

┌─────────────────────────────┐
│ Name   │ Department │ Batch │
├────────┼────────────┼───────┤
│ Pranav │ CSE        │ 2024  │
│ Anup   │ Mechanical │ 2024  │
│ Aman   │ CSE        │ 2025  │
└────────┴────────────┴───────┘

Tables are useful for:

CLI reports
User lists
Server information
Project status
Command-line dashboards
⏳ Spinner

Show a loading animation while an operation is running.

import { spinner } from "terminal-kit-lite";

const loading = spinner("Working...");

loading.start();

setTimeout(() => {
  loading.stop("✓ Done");
}, 2000);

A spinner is useful when your application is:

Connecting to a server
Installing something
Processing data
Running a build
Performing a long operation
📈 Progress Bar

Display progress for long-running tasks.

import { progress } from "terminal-kit-lite";

const bar = progress(100);

let value = 0;

const timer = setInterval(() => {
  value += 10;

  bar.update(value);

  if (value >= 100) {
    clearInterval(timer);
  }
}, 100);

Example:

[##############################----------] 75%

Progress bars can be useful for:

File processing
Downloads
Data processing
Builds
CLI automation
Batch operations
🖥️ Terminal Utilities

terminal-kit-lite also provides utilities for working with the terminal environment.

Example:

import { isTTY } from "terminal-kit-lite";

console.log("Running in TTY:", isTTY());

This can help applications determine whether they are running in an interactive terminal.

🔷 TypeScript

terminal-kit-lite is written in TypeScript and includes TypeScript declaration files.

Example:

import {
  colors,
  box,
  table,
  spinner,
  progress
} from "terminal-kit-lite";

console.log(colors.green("TypeScript works!"));

Type definitions are included automatically when installing the package.

📁 Project Structure
terminal-kit-lite/
│
├── src/
│   ├── box/
│   │   ├── box.ts
│   │   └── index.ts
│   │
│   ├── colors/
│   │   ├── colors.ts
│   │   └── index.ts
│   │
│   ├── progress/
│   │   ├── progress.ts
│   │   └── index.ts
│   │
│   ├── spinner/
│   │   ├── spinner.ts
│   │   └── index.ts
│   │
│   ├── table/
│   │   ├── table.ts
│   │   └── index.ts
│   │
│   ├── utils/
│   │   ├── terminal.ts
│   │   └── index.ts
│   │
│   └── index.ts
│
├── dist/
├── test-box.mjs
├── test-colors.mjs
├── test-progress.mjs
├── test-table.mjs
├── test-terminal.mjs
├── LICENSE
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
🛠️ Development

Clone the repository:

git clone https://github.com/sumitraj7766/terminal-kit-lite.git

Move into the project:

cd terminal-kit-lite

Install dependencies:

npm install

Build the project:

npm run build
🧪 Testing

Run the complete test suite:

npm test

The project uses Node.js' built-in test runner.

The test suite covers:

Colors
Box
Tables
Progress bars
Terminal utilities
Core exported functionality

Example successful test result:

ℹ tests 7
ℹ suites 0
ℹ pass 7
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
📦 Package Information
Property	Value
Package	terminal-kit-lite
Current version	0.1.0
License	MIT
Language	TypeScript
Module	ESM
Runtime	Node.js
Dependencies	Zero runtime dependencies
🎯 Why terminal-kit-lite?

Many CLI applications need simple terminal features such as:

colors
tables
loading indicators
progress bars
formatted messages

For small and medium projects, adding a large terminal framework can be unnecessary.

terminal-kit-lite focuses on keeping these utilities:

Simple + Lightweight + TypeScript-friendly + Easy to use

💡 Example CLI

You can combine multiple utilities to create a simple CLI interface.

import {
  colors,
  box,
  table,
  spinner
} from "terminal-kit-lite";

console.log(
  box(colors.cyan("My CLI Application"))
);

console.log();

console.log(
  table([
    ["Feature", "Status"],
    ["Colors", "✓"],
    ["Tables", "✓"],
    ["Spinner", "✓"],
    ["Progress", "✓"]
  ])
);

console.log();

const loading = spinner("Starting application...");

loading.start();

setTimeout(() => {
  loading.stop(colors.green("✓ Application started"));
}, 1500);
🌟 Contributing

Contributions are welcome!

If you have an idea for improving terminal-kit-lite, feel free to:

Fork the repository
Create a new branch
Make your changes
Add or update tests
Run the test suite
Open a Pull Request

Example:

git checkout -b feature/my-feature

Make your changes and then:

npm test

Commit:

git commit -m "feat: add my feature"

Push:

git push origin feature/my-feature

Then open a Pull Request on GitHub.

🐛 Reporting Issues

Found a bug?

Please open an issue on GitHub and include:

Node.js version
Operating system
terminal-kit-lite version
Reproduction steps
Expected behavior
Actual behavior
Relevant error messages
💬 Feature Requests

Have an idea for a useful terminal utility?

Open a GitHub issue and describe:

What problem it solves
How the API could work
Example usage
Why it would be useful
🔐 Security

If you discover a security vulnerability, please avoid posting sensitive details publicly in an issue.

Contact the maintainer privately so the issue can be investigated responsibly.

📜 License

This project is licensed under the MIT License.

See the LICENSE file for details.

🔗 Links

npm

https://www.npmjs.com/package/terminal-kit-lite

GitHub

https://github.com/sumitraj7766/terminal-kit-lite

👨‍💻 Author

Created and maintained by Sumit Kumar.

GitHub:

https://github.com/sumitraj7766

⭐ Support the Project

If terminal-kit-lite is useful to you:

⭐ Star the repository on GitHub
📦 Install the package from npm
🐛 Report bugs
💡 Suggest features
🤝 Contribute improvements

Every contribution helps the project grow.

Made for developers who love clean CLIs. ❤️
