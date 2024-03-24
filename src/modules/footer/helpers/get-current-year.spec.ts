import { getCurrentYear } from "./get-current-year";

describe("getCurrentYear function", () => {
  it("returns the current year", () => {
    const currentYear = getCurrentYear();

    expect(currentYear).toBe(2024);
  });
});
