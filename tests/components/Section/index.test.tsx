import React from "react";
import Section from "@components/Section";

import { render, screen } from "@test/utils";

describe("<Section />", () => {
  it("matches the snapshot", () => {
    const view = render(<Section>hi</Section>);

    expect(view).toMatchSnapshot();
  });
});
