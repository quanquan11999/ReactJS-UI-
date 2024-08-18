import React from "react";
import { shallow } from "enzyme";
import Shop from "./Shop";

describe("Shop", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Shop />);
    expect(wrapper).toMatchSnapshot();
  });
});
