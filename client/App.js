import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import Main from './Main';

function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

export default App;
