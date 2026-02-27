// @ts-nocheck
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import OfferPopup from "../OfferPopup";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...filterProps(props)}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...filterProps(props)}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

function filterProps(props: any) {
  const filtered = { ...props };
  delete filtered.initial;
  delete filtered.animate;
  delete filtered.exit;
  delete filtered.transition;
  delete filtered.whileHover;
  delete filtered.whileTap;
  delete filtered.variants;
  return filtered;
}

describe("OfferPopup", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    sessionStorage.clear();
  });

  it("renders after 5 second delay", async () => {
    render(<OfferPopup />);
    expect(screen.queryByText("Oferta Especial 🐾")).not.toBeInTheDocument();

    vi.advanceTimersByTime(5000);
    expect(screen.getByText("Oferta Especial 🐾")).toBeInTheDocument();
  });

  it("shows validation error for invalid phone", () => {
    render(<OfferPopup />);
    vi.advanceTimersByTime(5000);

    const input = screen.getByPlaceholderText("(00) 00000-0000");
    fireEvent.change(input, { target: { value: "123" } });
    fireEvent.submit(input.closest("form")!);

    expect(screen.getByText("Insira um número de WhatsApp válido.")).toBeInTheDocument();
  });

  it("formats phone number correctly", () => {
    render(<OfferPopup />);
    vi.advanceTimersByTime(5000);

    const input = screen.getByPlaceholderText("(00) 00000-0000") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "11999887766" } });
    expect(input.value).toBe("(11) 99988-7766");
  });

  it("closes when close button is clicked", () => {
    render(<OfferPopup />);
    vi.advanceTimersByTime(5000);
    expect(screen.getByText("Oferta Especial 🐾")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Fechar"));
    expect(screen.queryByText("Oferta Especial 🐾")).not.toBeInTheDocument();
  });

  it("opens WhatsApp on valid submission", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);
    render(<OfferPopup />);
    vi.advanceTimersByTime(5000);

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
