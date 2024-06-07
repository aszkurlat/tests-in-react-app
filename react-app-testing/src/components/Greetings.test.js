import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings.js";

describe("Greetings Component", () => {
  test("render Hello World as text", () => {
    //Arrange
    render(<Greetings />);

    //Act

    //Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("button was NOT clicked", () => {
    //arrange
    render(<Greetings />);

    // act

    //assert
    const paragraphElement = screen.getByText("How are you");
    expect(paragraphElement).toBeInTheDocument();
  });

  test("button was clicked", () => {
    //arrange
    render(<Greetings />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //assert
    const paragraphElement = screen.getByText("Text changed", { exact: false });
    expect(paragraphElement).toBeInTheDocument();
  });

  test("paragraph Hello World is NOT visible if the button was clicked", () => {
    render(<Greetings />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const paragraphHello = screen.queryByText("How are you");
    expect(paragraphHello).toBeNull();
  });
});
