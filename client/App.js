/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
}

export default App;
