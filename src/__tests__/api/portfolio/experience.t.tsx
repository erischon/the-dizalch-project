import { test, expect } from "vitest";

import { GET } from "../../../app/api/portfolio/experience/route";

// Tests that GET function returns all experiences when database is not empty
test("test get all experiences", async () => {
  const response = await GET();

  expect(response.status).toBe(200);
  expect(response.body).toEqual(
    expect.arrayContaining([expect.objectContaining({})])
  );
});
