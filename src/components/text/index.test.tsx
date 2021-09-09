import React from 'react';
import renderer from 'react-test-renderer';

import { Text } from './index';

describe('Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Text type="BigTitle">Hello</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
