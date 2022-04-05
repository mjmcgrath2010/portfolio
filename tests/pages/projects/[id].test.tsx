import ProjectsId from "@pages/projects/[id]";

import { render, screen } from "@test/utils";

describe("<ProjectsId />", () => {
  it("matches the snapshot", () => {
    const view = render(<ProjectsId />);

    expect(view).toMatchSnapshot();
  });
});
