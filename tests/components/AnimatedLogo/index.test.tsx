import AnimatedLogo from '@components/AnimatedLogo';

import { render, screen } from "@test/utils";

describe('<AnimatedLogo />', () => {
  it("matches the snapshot", () => {
    const view = render(<AnimatedLogo />);

    expect(view).toMatchSnapshot();
  });
});