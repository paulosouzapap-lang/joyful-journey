import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NavLink } from "../NavLink";

describe("NavLink", () => {
  it("renders with correct text and href", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavLink to="/about">About</NavLink>
      </MemoryRouter>
    );
    const link = screen.getByText("About");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about");
  });

  it("applies activeClassName when route matches", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <NavLink to="/about" className="base" activeClassName="active">
          About
        </NavLink>
      </MemoryRouter>
    );
    expect(screen.getByText("About")).toHaveClass("base", "active");
  });

  it("does not apply activeClassName when route doesn't match", () => {
    render(
      <MemoryRouter initialEntries={["/other"]}>
        <NavLink to="/about" className="base" activeClassName="active">
          About
        </NavLink>
      </MemoryRouter>
    );
    const link = screen.getByText("About");
    expect(link).toHaveClass("base");
    expect(link).not.toHaveClass("active");
  });
});
