import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("App component", () => {
  it("renders App component with routes", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getByText("Header")).toBeInTheDocument();
  });

  // Add more test cases as needed for different routes and functionality
});
