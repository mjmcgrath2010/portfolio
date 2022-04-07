import Modal from '@components/Modal';

import { render, screen } from "@test/utils";

describe('<Modal />', () => {
  it("matches the snapshot", () => {
    const view = render(<Modal />);

    expect(view).toMatchSnapshot();
  });
});