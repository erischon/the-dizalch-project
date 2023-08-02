import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import PortfolioLayout from "@/app/(portfolio)/layout";
import PortfolioPage from "@/app/(portfolio)/(routes)/page";

import { TAGLINE } from "@/lib/constants";

describe("Given I am a ", async () => {
  describe("When I am on the Portfolio page", () => {
    it("Should render my tagline", async () => {
      // Arrange
      render(
        <PortfolioLayout>
          <PortfolioPage />
        </PortfolioLayout>
      );

      // Act
      const renderedTagline = screen.queryByText(TAGLINE);

      // Assert
      expect(renderedTagline?.textContent).toBe(TAGLINE);
    });

    it("Should render a navbar", async () => {
      // Arrange
      render(
        <PortfolioLayout>
          <PortfolioPage />
        </PortfolioLayout>
      );

      // Act
      const renderedNavbar = screen.queryByRole("navigation");

      // Assert
      expect(renderedNavbar).toBeInTheDocument();
    });

    it("Should render a footer", async () => {
      // Arrange
      render(
        <PortfolioLayout>
          <PortfolioPage />
        </PortfolioLayout>
      );

      // Act
      const renderedFooter = screen.queryByRole("contentinfo");

      // Assert
      expect(renderedFooter).toBeInTheDocument();
    });
  });
});
