import React from "react";
import { shallow } from "enzyme";
import Container from "./Container";

describe("Container", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Container />);
    expect(wrapper).toMatchSnapshot();
  });
});
