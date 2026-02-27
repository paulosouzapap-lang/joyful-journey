import { describe, it, expect } from "vitest";
import { formatPhone, isValidPhone } from "../phone";

describe("formatPhone", () => {
  it("formats 2 digits as area code", () => {
    expect(formatPhone("11")).toBe("(11");
  });

  it("formats partial number with area code", () => {
    expect(formatPhone("11999")).toBe("(11) 999");
  });

  it("formats full 11-digit mobile number", () => {
    expect(formatPhone("11999887766")).toBe("(11) 99988-7766");
  });

  it("formats 10-digit landline number", () => {
    expect(formatPhone("1133445566")).toBe("(11) 33445-566");
  });

  it("strips non-digit characters before formatting", () => {
    expect(formatPhone("(11) 99988-7766")).toBe("(11) 99988-7766");
  });

  it("truncates to 11 digits max", () => {
    expect(formatPhone("119998877661234")).toBe("(11) 99988-7766");
  });

  it("handles empty string", () => {
    expect(formatPhone("")).toBe("(");
  });

  it("handles single digit", () => {
    expect(formatPhone("1")).toBe("(1");
  });
});

describe("isValidPhone", () => {
  it("returns true for 11-digit mobile number", () => {
    expect(isValidPhone("11999887766")).toBe(true);
  });

  it("returns true for 10-digit landline", () => {
    expect(isValidPhone("1133445566")).toBe(true);
  });

  it("returns true for formatted number", () => {
    expect(isValidPhone("(11) 99988-7766")).toBe(true);
  });

  it("returns false for too few digits", () => {
    expect(isValidPhone("123")).toBe(false);
    expect(isValidPhone("123456789")).toBe(false);
  });

  it("returns false for too many digits", () => {
    expect(isValidPhone("123456789012")).toBe(false);
  });

  it("returns false for empty string", () => {
    expect(isValidPhone("")).toBe(false);
  });
});
