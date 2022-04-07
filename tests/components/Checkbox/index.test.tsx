import Checkbox from '@components/Checkbox';

import { render, screen } from "@test/utils";

describe('<Checkbox />', () => {
  it("matches the snapshot", () => {
    const view = render(<Checkbox />);

    expect(view).toMatchSnapshot();
  });
});