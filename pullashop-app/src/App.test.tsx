import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  test("renders homepage", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    // Expect landing page
    expect(getByText(/Welcome to the PullaShop/i)).toBeInTheDocument();
  });
});
