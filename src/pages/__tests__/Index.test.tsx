import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import React from "react";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: new Proxy({}, {
    get: (_target: object, prop: string | symbol) => {
      return ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
        const Tag = (typeof prop === "string" ? prop : "div") as keyof React.JSX.IntrinsicElements;
        const filtered = { ...props };
        const motionKeys = ["initial", "animate", "exit", "transition", "whileHover", "whileTap", "whileInView", "variants", "viewport"];
        for (const key of motionKeys) {
          delete filtered[key];
        }
        return React.createElement(Tag, filtered, children);
      };
    },
  }),
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

// Mock image imports
vi.mock("@/assets/hero-vet.jpg", () => ({ default: "hero.jpg" }));
vi.mock("@/assets/about-pets.jpg", () => ({ default: "about.jpg" }));
vi.mock("@/assets/about-clinic-pets.jpg", () => ({ default: "about-clinic.jpg" }));
vi.mock("@/assets/unipet-logo.png", () => ({ default: "logo.png" }));
vi.mock("@/assets/gallery-team.jpg", () => ({ default: "team.jpg" }));
vi.mock("@/assets/gallery-clinic.jpg", () => ({ default: "clinic.jpg" }));
vi.mock("@/assets/gallery-cat.jpg", () => ({ default: "cat.jpg" }));
vi.mock("@/assets/gallery-petshop.jpg", () => ({ default: "petshop.jpg" }));
vi.mock("@/assets/gallery-vaccine.jpg", () => ({ default: "vaccine.jpg" }));
vi.mock("@/assets/gallery-reception.jpg", () => ({ default: "reception.jpg" }));
vi.mock("@/assets/services-consultation.jpg", () => ({ default: "consultation.jpg" }));
vi.mock("@/assets/services-vaccine.jpg", () => ({ default: "vaccine-s.jpg" }));
vi.mock("@/assets/services-lab.jpg", () => ({ default: "lab.jpg" }));
vi.mock("@/assets/services-checkup.jpg", () => ({ default: "checkup.jpg" }));
vi.mock("@/assets/services-clinical.jpg", () => ({ default: "clinical.jpg" }));
vi.mock("@/assets/services-guidance.jpg", () => ({ default: "guidance.jpg" }));

// Mock OfferPopup
vi.mock("@/components/OfferPopup", () => ({
  default: () => <div data-testid="offer-popup" />,
}));

describe("Index Page", () => {
  const renderIndex = async () => {
    const { default: Index } = await import("../Index");
    return render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>
    );
  };

  it("renders the hero section", async () => {
    await renderIndex();
    expect(screen.getByText(/Cuidamos do seu melhor amigo/)).toBeInTheDocument();
  });

  it("renders navigation links", async () => {
    await renderIndex();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
    expect(screen.getByText("Serviços")).toBeInTheDocument();
    expect(screen.getByText("Contato")).toBeInTheDocument();
  });

  it("renders all service cards", async () => {
    await renderIndex();
    expect(screen.getByText("Consultas Veterinárias")).toBeInTheDocument();
    expect(screen.getByText("Vacinação")).toBeInTheDocument();
    expect(screen.getByText("Exames Laboratoriais")).toBeInTheDocument();
  });

  it("renders testimonials", async () => {
    await renderIndex();
    expect(screen.getByText(/Ana Paula/)).toBeInTheDocument();
    expect(screen.getByText(/Carlos Eduardo/)).toBeInTheDocument();
  });

  it("renders the booking form section", async () => {
    await renderIndex();
    expect(screen.getByText(/Agende Online/)).toBeInTheDocument();
  });

  it("renders the OfferPopup", async () => {
    await renderIndex();
    expect(screen.getByTestId("offer-popup")).toBeInTheDocument();
  });
});
