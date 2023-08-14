import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import PortfolioLayout from "@/app/(portfolio)/layout";
import PortfolioPage from "@/app/(portfolio)/page";

import { tagLine } from "@/data/infos";

describe("Given I am a guest", async () => {
  describe("When I am on the Portfolio page", () => {
    it("Should render a tagline", async () => {
      // Arrange
      render(
        <PortfolioLayout>
          <PortfolioPage />
        </PortfolioLayout>
      );

      // Act
      const renderedTagline = screen.queryByText(tagLine);

      // Assert
      expect(renderedTagline?.textContent).toBe(tagLine);
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
