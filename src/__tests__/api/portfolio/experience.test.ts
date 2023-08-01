import { createMocks } from "node-mocks-http";

import { GET } from "../../../app/api/portfolio/experience/route";

// Tests that GET function returns all experiences when database is not empty
test("test get all experiences", async () => {
  const { req, res } = createMocks({
    method: "GET",
    query: {
      id: "1",
    },
  });

  const response = await GET();

  expect(response.status).toBe(200);
  expect(response.body).toEqual(
    expect.arrayContaining([expect.objectContaining({})])
  );
});
