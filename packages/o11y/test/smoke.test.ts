import assert from "node:assert/strict";
import { test } from "node:test";

import type { Outcome } from "../src/index.ts";

test("the package exports an outcome type", () => {
  const outcome: Outcome = "ok";

  assert.equal(outcome, "ok");
});
