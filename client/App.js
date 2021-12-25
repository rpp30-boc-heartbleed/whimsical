/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import Navigation from './navigation/Navigation';

function App() {
  return (
    <RecoilRoot>
      <Navigation />
    </RecoilRoot>
  );
}

export default App;
