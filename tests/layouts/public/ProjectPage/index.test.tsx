import { ProjectPage } from "@layouts";

import { render, screen } from "@test/utils";

describe("<ProjectPage />", () => {
  it("matches the snapshot", () => {
    const view = render(<ProjectPage />);

    expect(view).toMatchSnapshot();
  });
});
