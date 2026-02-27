import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import React from "react";

// Helper to filter framer-motion props from DOM elements
function filterMotionProps(props: Record<string, unknown>) {
  const filtered = { ...props };
  const motionKeys = ["initial", "animate", "exit", "transition", "whileHover", "whileTap", "variants"];
  for (const key of motionKeys) {
    delete filtered[key];
  }
  return filtered;
}

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <div {...filterMotionProps(props)}>{children}</div>
    ),
    button: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => (
      <button {...filterMotionProps(props)}>{children}</button>
    ),
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

// Mock image import
vi.mock("@/assets/unipet-logo.png", () => ({ default: "logo.png" }));

describe("OfferPopup", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    sessionStorage.clear();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders after 5 second delay", async () => {
    const { default: OfferPopup } = await import("../OfferPopup");
    render(<OfferPopup />);
    expect(screen.queryByText("Oferta Especial 🐾")).not.toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.getByText("Oferta Especial 🐾")).toBeInTheDocument();
  });

  it("shows validation error for invalid phone", async () => {
    const { default: OfferPopup } = await import("../OfferPopup");
    render(<OfferPopup />);
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    const input = screen.getByPlaceholderText("(00) 00000-0000");
    fireEvent.change(input, { target: { value: "123" } });
    fireEvent.submit(input.closest("form")!);

    expect(screen.getByText("Insira um número de WhatsApp válido.")).toBeInTheDocument();
  });

  it("formats phone number correctly", async () => {
    const { default: OfferPopup } = await import("../OfferPopup");
    render(<OfferPopup />);
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    const input = screen.getByPlaceholderText("(00) 00000-0000") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "11999887766" } });
    expect(input.value).toBe("(11) 99988-7766");
  });

  it("closes when close button is clicked", async () => {
    const { default: OfferPopup } = await import("../OfferPopup");
    render(<OfferPopup />);
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.getByText("Oferta Especial 🐾")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Fechar"));
    expect(screen.queryByText("Oferta Especial 🐾")).not.toBeInTheDocument();
  });

  it("opens WhatsApp on valid submission", async () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    const { default: OfferPopup } = await import("../OfferPopup");
    render(<OfferPopup />);
    act(() => {
      vi.advanceTimersByTime(5000);
    });

    const input = screen.getByPlaceholderText("(00) 00000-0000");
    fireEvent.change(input, { target: { value: "11999887766" } });
    fireEvent.submit(input.closest("form")!);

    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining("wa.me"),
      "_blank"
    );
    expect(screen.getByText("Obrigado! 💜")).toBeInTheDocument();
    openSpy.mockRestore();
  });
});
