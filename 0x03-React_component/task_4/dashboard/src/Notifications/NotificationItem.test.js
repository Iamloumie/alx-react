import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem component tests", () => {
    it('renders NotificationItem component without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBe(true);
    });

    it ('renders correct html from type="default" and value="test" props', () => {
        const wrapper = shallow(<NotificationItem />);

        wrapper.setProps({ type: "default", value: "test" });
        expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
    });

    it('renders correct html from html="<u>test</u>" props', () => {
        const wrapper = shallow(<NotificationItem />);

        wrapper.setProps({ html: "<u>test</u>" });
        expect(wrapper.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
    });
});