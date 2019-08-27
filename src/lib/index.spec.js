import * as React from "react";
import { shallow } from "enzyme";
import SPagination from ".";

describe("<SPagination />", () => {
    test("Renders", () => {
        const wrapper = shallow(<SPagination />);
        expect(wrapper.exists()).toBe(true);
    })
})
