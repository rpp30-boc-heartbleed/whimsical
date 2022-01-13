import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import NavBarContainer from '../components/NavBar/NavBarContainer';

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');

describe('NavBar', () => {
  // // snapshot test
  // it('should render properly with icons', () => {
  //   // eslint-disable-next-line react/jsx-filename-extension
  //   const tree = renderer.create(<NavBarContainer />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('should render user profile icon', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { getByTestId } = render(<NavBarContainer />);
    expect(getByTestId('user')).toBeTruthy();
  });

  it('should render add errand icon', () => {
    const { getByTestId } = render(<NavBarContainer />);
    expect(getByTestId('plus-circle')).toBeTruthy();
  });

  it('should render friends list icon', () => {
    const { getByTestId } = render(<NavBarContainer />);
    expect(getByTestId('users')).toBeTruthy();
  });

  it('should render errand requests icon', () => {
    const { getByTestId } = render(<NavBarContainer />);
    expect(getByTestId('shopping-basket')).toBeTruthy();
  });

  it('should render dashboard icon', () => {
    const { getByTestId } = render(<NavBarContainer />);
    expect(getByTestId('home')).toBeTruthy();
  });

  it('should fire onPress function when clicking user profile icon', () => {
    const push = jest.fn();
    const { getByTestId } = render(<NavBarContainer navigation={{ push }} />);

    fireEvent.press(getByTestId('user'));
    expect(push).toHaveBeenCalledWith('UserProfile');
  });

  it('should fire onPress function when clicking new errand icon', () => {
    const push = jest.fn();
    const { getByTestId } = render(<NavBarContainer navigation={{ push }} />);

    fireEvent.press(getByTestId('plus-circle'));
    expect(push).toHaveBeenCalledWith('NewErrand');
  });

  it('should fire onPress function when clicking friends list icon', () => {
    const push = jest.fn();
    const { getByTestId } = render(<NavBarContainer navigation={{ push }} />);

    fireEvent.press(getByTestId('users'));
    expect(push).toHaveBeenCalledWith('FriendsList');
  });

  it('should fire onPress function when clicking errand requests icon', () => {
    const push = jest.fn();
    const { getByTestId } = render(<NavBarContainer navigation={{ push }} />);

    fireEvent.press(getByTestId('shopping-basket'));
    expect(push).toHaveBeenCalledWith('ErrandRequests');
  });

  it('should fire onPress function when clicking dashboard icon', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<NavBarContainer navigation={{ navigate }} />);

    fireEvent.press(getByTestId('home'));
    expect(navigate).toHaveBeenCalledWith('Dashboard');
  });
});
