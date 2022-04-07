import React from "react";
import Card from "@components/Card";

import { render, screen } from "@test/utils";

describe("<Card />", () => {
  it("matches the snapshot", () => {
    const view = render(<Card />);

    expect(view).toMatchSnapshot();
  });
});
