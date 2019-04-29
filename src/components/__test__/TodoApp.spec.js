// @flow

import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme/build';

import TodoApp from '../TodoApp';

const setup = (setupProps = {}) => {
  const store = configureStore()();
  const wrapper = shallow(<TodoApp store={store} />);

  return {
    store,
    wrapper
  };
};

describe('App', () => {
  test('renders without crashing', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});