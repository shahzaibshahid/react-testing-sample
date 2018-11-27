import React from 'react';
import { ReactDom } from "react-dom";
import { Login } from './../components/Login/Login';

import {
    shallow,
    mount
} from 'enzyme';

describe('Test Login Component', () => {
    it('Render Login Component without crashing', () => {
        const wrapper = shallow(< Login />);
        expect(wrapper.find('.container').length).toEqual(1);
    });
    it('Renders Login Form', () => {
        const wrapper = mount(< Login />);
        expect(wrapper.find('#login-form').length).toEqual(1);
        expect(wrapper.find('#email').length).toEqual(1);
        expect(wrapper.find('#password').length).toEqual(1);
        expect(wrapper.find('#login-button').length).toEqual(1);
    });
});
