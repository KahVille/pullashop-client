import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

describe("App", () => {
  test("renders homepage", () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Expect landing page
    expect(getByText(/Welcome to the PullaShop/i)).toBeInTheDocument();
  });
});
