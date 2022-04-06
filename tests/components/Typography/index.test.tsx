import Typography from '@components/Typography';

import { render, screen } from "@test/utils";

describe('<Typography />', () => {
  it("matches the snapshot", () => {
    const view = render(<Typography />);

    expect(view).toMatchSnapshot();
  });
});