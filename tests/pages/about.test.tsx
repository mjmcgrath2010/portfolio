import About from '@pages/about';

import { render, screen } from "@test/utils";

describe('<About />', () => {
  it("matches the snapshot", () => {
    const view = render(<About />);

    expect(view).toMatchSnapshot();
  });
});