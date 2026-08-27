import { colors } from "./dist/index.js";

console.log(colors.red("Red"));
console.log(colors.green("Green"));
console.log(colors.yellow("Yellow"));
console.log(colors.blue("Blue"));
console.log(colors.magenta("Magenta"));
console.log(colors.cyan("Cyan"));

console.log("");

console.log(colors.bold("Bold text"));
console.log(colors.dim("Dim text"));
console.log(colors.underline("Underlined text"));

console.log("");

console.log(colors.brightRed("Bright red"));
console.log(colors.brightGreen("Bright green"));
console.log(colors.brightCyan("Bright cyan"));

console.log("");

console.log(colors.bgRed(" Red background "));
console.log(colors.bgGreen(" Green background "));
console.log(colors.bgBlue(" Blue background "));