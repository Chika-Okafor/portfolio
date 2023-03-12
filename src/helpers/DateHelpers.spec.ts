import { currentYear } from "./DateHelpers";

jest.mock("./DateHelpers");

const mockCurrentYear = currentYear as jest.Mock;
const mockYear: number = new Date().getFullYear();

beforeEach(() => {
  mockCurrentYear.mockReturnValue(mockYear);
});

describe("DateHelpers", () => {
  describe("currentYear", () => {
    it("returns the current year", () => {
      const year = mockCurrentYear();

      expect(year).toEqual(mockYear);
    });
  });
});
