/* eslint-disable react/jsx-filename-extension */
import React, { Suspense } from 'react';
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
import Loading from './components/Shared/Loading';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <Navigation />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
