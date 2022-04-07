import Image from '@components/Image';

import { render, screen } from "@test/utils";

describe('<Image />', () => {
  it("matches the snapshot", () => {
    const view = render(<Image />);

    expect(view).toMatchSnapshot();
  });
});