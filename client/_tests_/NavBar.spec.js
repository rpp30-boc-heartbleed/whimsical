import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import NavBarContainer from '../components/NavBar/NavBarContainer';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('NavBar', () => {
  // it('should render properly', () => {
  //   // snapshot testing
  //   // eslint-disable-next-line react/jsx-filename-extension
  //   const tree = renderer.create(<NavBarContainer />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('should render properly with icons', () => {
    const tree = renderer.create(<NavBarContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
