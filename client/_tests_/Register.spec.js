import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegisterContainer from '../components/Authentication/RegisterContainer';

describe('Login text', () => {
  it('renders a welcome message', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const { queryByText } = render(<RegisterContainer />);

    expect(queryByText('Welcome to Quick Bagel!')).not.toBeNull();
  });
});

describe('Login form', () => {
  it('clears all fields when clicking the register button', () => {
    const { getByTestId } = render(<RegisterContainer />);
    fireEvent.changeText(getByTestId('name'), 'rex');
    fireEvent.changeText(getByTestId('streetAddress'), 'rex');
    fireEvent.changeText(getByTestId('city'), 'rex');
    fireEvent.changeText(getByTestId('state'), 'rex');
    fireEvent.changeText(getByTestId('zipCode'), '00000');
    fireEvent.changeText(getByTestId('imageURL'), 'rex');
    fireEvent.changeText(getByTestId('email'), 'rex@rex.com');
    fireEvent.changeText(getByTestId('password'), 'rexrexrex');
    fireEvent.changeText(getByTestId('confirmPassword'), 'rexrexrex');
    fireEvent.press(getByTestId('submitRegister'));

    expect(getByTestId('name').props.value).toEqual('');
    expect(getByTestId('streetAddress').props.value).toEqual('');
    expect(getByTestId('city').props.value).toEqual('');
    expect(getByTestId('state').props.value).toEqual('');
    expect(getByTestId('zipCode').props.value).toEqual('');
    expect(getByTestId('imageURL').props.value).toEqual('');
    expect(getByTestId('email').props.value).toEqual('');
    expect(getByTestId('password').props.value).toEqual('');
    expect(getByTestId('confirmPassword').props.value).toEqual('');
  });

  it('should fire onPress function when clicking user profile icon', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<RegisterContainer navigation={{ navigate }} />);

    fireEvent.press(getByTestId('login'));
    expect(navigate).toHaveBeenCalledWith('Login');
  });
});
