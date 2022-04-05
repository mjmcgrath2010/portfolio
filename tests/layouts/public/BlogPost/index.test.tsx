import { BlogPost } from '@layouts';

import { render, screen } from "@test/utils";

describe('<BlogPost />', () => {
  it("matches the snapshot", () => {
    const view = render(<BlogPost />);

    expect(view).toMatchSnapshot();
  });
});