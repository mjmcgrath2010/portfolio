import BlogIndex from '@pages/blog/index';

import { render, screen } from "@test/utils";

describe('<BlogIndex />', () => {
  it("matches the snapshot", () => {
    const view = render(<BlogIndex />);

    expect(view).toMatchSnapshot();
  });
});