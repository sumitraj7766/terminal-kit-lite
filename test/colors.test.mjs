import test from "node:test";
import assert from "node:assert/strict";

import { colors } from "../dist/index.js";

test("colors.red returns text", () => {
  const result = colors.red("Hello");

  assert.equal(typeof result, "string");
  assert.ok(result.includes("Hello"));
});

test("colors.green returns text", () => {
  const result = colors.green("Success");

  assert.equal(typeof result, "string");
  assert.ok(result.includes("Success"));
});