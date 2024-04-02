import React from "react";
import { render, screen } from "@testing-library/react";
import ContactInfoList, { ContactInfoListProps } from "./contact-info-list";

const mockProps: ContactInfoListProps = {
  headline: "Mock Headline",
  list: ["Item 1", "Item 2", "Item 3"],
};

describe("ContactInfoList", () => {
  it("renders headline and list items correctly", () => {
    render(<ContactInfoList {...mockProps} />);

    const headline = screen.getByText("Mock Headline");
    const listItem1 = screen.getByText("Item 1");
    const listItem2 = screen.getByText("Item 2");
    const listItem3 = screen.getByText("Item 3");

    expect(headline).toBeInTheDocument();
    expect(listItem1).toBeInTheDocument();
    expect(listItem2).toBeInTheDocument();
    expect(listItem3).toBeInTheDocument();
  });
});
