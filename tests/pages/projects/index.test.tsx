import ProjectsIndex from '@pages/projects/index';

import { render, screen } from "@test/utils";

describe('<ProjectsIndex />', () => {
  it("matches the snapshot", () => {
    const view = render(<ProjectsIndex />);

    expect(view).toMatchSnapshot();
  });
});