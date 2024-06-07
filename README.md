## Testing React Application using Jest Library

In this project, I conducted testing of a React application using the Jest library. The tests were implemented following the 3A principle (arrange, act, assert), allowing for clear and effective verification of component behavior.

### Technologies Used:
- React
- Jest
- @testing-library/react

### Description of Tests:
#### Component Testing:
- The @testing-library/react library was used to render components and search for elements on the page.
- Various user interaction scenarios with the application interface were tested, including asynchronous component, etc.

#### Testing Asynchronicity:
- Asynchronous operations, such as data fetching from a server, were tested using async/await functions.
- The jest.fn() function was used to mock the fetch function, simulating data retrieval from the server.

#### Testing Utility Functions:
- Additionally, helper functions and tools used in the application were tested to ensure they behave as expected.

### Example Test:
```jsx
import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component fetching data", () => {
  test("render posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
```

### How to Run Tests?
1. Clone this project to your local computer.
2. Install required dependencies by running `npm install` command.
3. Run the tests by typing `npm test` command in the terminal.


