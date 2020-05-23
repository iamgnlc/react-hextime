import React from "react"
import { render, screen } from "@testing-library/react"
import HexTime from "./"

test("renders repo link", () => {
  render(<HexTime />)
  const repo = screen.getByText(process.env.REACT_APP_GITHUB_URL)
  expect(repo).toBeInTheDocument()
})
