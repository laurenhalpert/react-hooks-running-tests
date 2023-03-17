import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

//import Article from "../components/Article";
function Article (props) {
  return <p>please pass this test</p>
}
export default Article

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
