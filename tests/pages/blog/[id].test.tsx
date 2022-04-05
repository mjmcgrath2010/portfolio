import BlogId from "@pages/blog/[id]";

import { render, screen } from "@test/utils";

describe("<BlogId />", () => {
  it("matches the snapshot", () => {
    const view = render(<BlogId />);

    expect(view).toMatchSnapshot();
  });
});
