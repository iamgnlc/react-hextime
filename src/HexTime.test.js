import React from "react"
import { render } from "@testing-library/react"
import HexTime from "./HexTime"

import config from "./config.json"

test("renders learn react link", () => {
  const { getByText } = render(<HexTime />)
  const linkElement = getByText(config.repo)
  expect(linkElement).toBeInTheDocument()
})
