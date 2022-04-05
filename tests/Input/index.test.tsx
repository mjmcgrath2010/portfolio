import Input from "@components/Input";

import { render, screen } from "../test-utils";

describe("<Input />", () => {
  it("has no tests", () => {
    const view = render(
      <Input id="test" name="testField" onChange={jest.fn()} />
    );

    expect(view).toMatchSnapshot();
  });
});
