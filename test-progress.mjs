import { progress } from "./dist/index.js";

const bar = progress(100, {
  width: 40,
  completeChar: "#",
  incompleteChar: "-",
  showPercentage: true
});

bar.update(75);