import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import App from '../client/components/App.jsx';

describe('Testing App component', () => {
  it('should render without throwing an error', function() {
    expect(shallow(<App />).contains(<h1>Hello React!</h1>)).toBe(true);
  });
});