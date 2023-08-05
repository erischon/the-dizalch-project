import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import PortfolioPage from "@/app/(portfolio)/page";

import { TAGLINE } from "@/lib/constants";

describe("Given I am a ", async () => {
  describe("When I am on the Portfolio page", () => {
    it("Should render my tagline", async () => {
      // Arrange

      // Act
      render(<PortfolioPage />);
      const renderedTagline = screen.queryByText(TAGLINE);

      // Assert
      expect(renderedTagline?.textContent).toBe(TAGLINE);
    });
  });
});
