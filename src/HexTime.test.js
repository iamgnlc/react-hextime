import React from "react"
import { render } from "@testing-library/react"
import HexTime from "./HexTime"

test("renders learn react link", () => {
  const { getByText } = render(<HexTime />)
  const linkElement = getByText(process.env.REACT_APP_REPO_URL)
  expect(linkElement).toBeInTheDocument()
})
