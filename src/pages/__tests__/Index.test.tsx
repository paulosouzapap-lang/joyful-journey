// @ts-nocheck
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: new Proxy({}, {
    get: (_target, prop) => {
      return ({ children, ...props }: any) => {
        const Tag = typeof prop === "string" ? prop : "div";
        const filtered = { ...props };
        for (const key of ["initial", "animate", "exit", "transition", "whileHover", "whileTap", "whileInView", "variants", "viewport"]) {
          delete filtered[key];
        }
        // Filter out non-DOM props
        const domProps: any = {};
        for (const [k, v] of Object.entries(filtered)) {
          if (!k.startsWith("on") || typeof v === "function") {
            domProps[k] = v;
          }
        }
        return <Tag {...domProps}>{children}</Tag>;
      };
    },
  }) as any,
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock image imports
vi.mock("@/assets/hero-vet.jpg", () => ({ default: "hero.jpg" }));
vi.mock("@/assets/about-pets.jpg", () => ({ default: "about.jpg" }));
vi.mock("@/assets/unipet-logo.png", () => ({ default: "logo.png" }));
vi.mock("@/assets/gallery-team.jpg", () => ({ default: "team.jpg" }));
vi.mock("@/assets/gallery-clinic.jpg", () => ({ default: "clinic.jpg" }));
vi.mock("@/assets/gallery-cat.jpg", () => ({ default: "cat.jpg" }));
vi.mock("@/assets/gallery-petshop.jpg", () => ({ default: "petshop.jpg" }));
vi.mock("@/assets/gallery-vaccine.jpg", () => ({ default: "vaccine.jpg" }));
vi.mock("@/assets/gallery-reception.jpg", () => ({ default: "reception.jpg" }));

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
    expect(screen.getByText(/Agende sua Consulta/)).toBeInTheDocument();
  });

  it("renders the OfferPopup", async () => {
    await renderIndex();
    expect(screen.getByTestId("offer-popup")).toBeInTheDocument();
  });
});
