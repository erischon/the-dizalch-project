import { tagLine } from "../../../src/data/infos";

const siteTitle = "The Dizalch Project";
const siteAuthor = "Eri Schön";
const siteDescription = "A project for Freelance Developers";

describe("Landing page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("has UI", () => {
    cy.step("has a Tagline");
    cy.get("h1").contains(tagLine);

    cy.step("has a subtitle");
    cy.get("h3");

    cy.step("has a CTA button");
    cy.get("a").find("button").contains("Parlons-en !");

    cy.step("has a footer");
    cy.get("footer");

    cy.step("has navbar");
    cy.get("header").find("nav");
  });

  it("has SEO", () => {
    cy.step("has a title");
    cy.get("head title").contains(siteTitle);

    cy.step("has a favicon");
    cy.get("head link[rel='icon']");

    cy.step("has a meta description");
    cy.get("head meta[name='description']").should(
      "have.attr",
      "content",
      siteDescription
    );

    cy.step("has a meta author");
    cy.get("head meta[name='author']").should(
      "have.attr",
      "content",
      siteAuthor
    );

    cy.step("has a open graph title");
    cy.get("head meta[property='og:title']");
  });
});
