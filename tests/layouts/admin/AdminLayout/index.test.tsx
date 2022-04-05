import AdminLayout from "@layouts/admin/AdminLayout";

import { render, screen } from "@test/utils";

describe("<AdminLayout />", () => {
  it("matches the snapshot", () => {
    const view = render(<AdminLayout />);
    expect(view).toMatchSnapshot();
  });
});
