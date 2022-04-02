import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("home page", () => {
  it("render content", () => {
    render(<Home />);

    const appText = screen.getByText("Welcome to the PullaShop");

    expect(appText).toBeDefined();
  });
});
