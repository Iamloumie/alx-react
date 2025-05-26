import React from 'react';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe("Footer", () => {
    it("renders without crashing", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
    });

    it("should render the text copyright", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists("p")).toEqual(true);
        expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
    });
}
);