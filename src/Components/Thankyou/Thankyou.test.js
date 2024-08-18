import React from "react";
import { shallow } from "enzyme";
import Thankyou from "./Thankyou";

describe("Thankyou", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Thankyou />);
    expect(wrapper).toMatchSnapshot();
  });
});
