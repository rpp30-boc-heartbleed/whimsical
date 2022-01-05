import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginContainer from '../components/Authentication/LoginContainer';

describe('Login text', () => {
  it('renders a welcome message', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { queryByText } = render(<LoginContainer />);
    expect(queryByText('Welcome to Quick Bagel!')).not.toBeNull();
  });
  // it('renders an option to register message', () => {
  //   // eslint-disable-next-line react/jsx-filename-extension
  //   const { queryByText } = render(<LoginContainer />);
  //   expect(queryByText('have an acccount?!')).not.toBeNull();
  //   expect(queryByText('now')).not.toBeNull();
  // });
});

describe('Login form', () => {
  describe('clicking Login', () => {
    it('clears all fields', () => {
      const { getByTestId } = render(<LoginContainer />);
      fireEvent.changeText(getByTestId('email'), 'rex@rex.com');
      fireEvent.changeText(getByTestId('password'), 'rexrexrex');
      fireEvent.press(getByTestId('submitLogin'));

      expect(getByTestId('email').props.value).toEqual('');
      expect(getByTestId('password').props.value).toEqual('');
    });
  });
});

// register
