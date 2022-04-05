import Input from "@components/Input";

import { render } from "@test/utils";

describe("<Input />", () => {
  it("matches the snapshot", () => {
    const view = render(
      <Input id="test" name="testField" onChange={jest.fn()} />
    );

    expect(view).toMatchSnapshot();
  });
});
