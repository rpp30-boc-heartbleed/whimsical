import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginContainer from '../components/Authentication/LoginContainer';

describe('Login text', () => {
  it('renders a welcome message', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { queryByText } = render(<LoginContainer />);

    expect(queryByText('Welcome to Quick Bagel!')).not.toBeNull();
  });
});

describe('Login form', () => {
  it('clears all fields upon clicking login button', () => {
    const { getByTestId } = render(<LoginContainer />);
    fireEvent.changeText(getByTestId('email'), 'rex@rex.com');
    fireEvent.changeText(getByTestId('password'), 'rexrexrex');
    fireEvent.press(getByTestId('submitLogin'));

    expect(getByTestId('email').props.value).toEqual('');
    expect(getByTestId('password').props.value).toEqual('');
  });

  it('should fire onPress function when clicking user profile icon', () => {
    const push = jest.fn();
    const { getByTestId } = render(<LoginContainer navigation={{ push }} />);

    fireEvent.press(getByTestId('register'));
    expect(push).toHaveBeenCalledWith('Register');
  });
});
