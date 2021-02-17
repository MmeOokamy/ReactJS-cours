import React from "react";
import { shallow } from "enzyme";
import Count from "./Count";

describe("Count", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Count />);
    expect(wrapper).toMatchSnapshot();
  });
});
