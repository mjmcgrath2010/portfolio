import { CompanyLayout } from "@layouts";

import { render, screen } from "@test/utils";

describe("<CompanyLayout />", () => {
  it("matches the snapshot", () => {
    const view = render(<CompanyLayout> hi</CompanyLayout>);

    expect(view).toMatchSnapshot();
  });
});
