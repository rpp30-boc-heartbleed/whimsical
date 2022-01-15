import React from 'react';
import { useRecoilValue } from 'recoil';
import ErrandRequests from './ErrandRequests';

const ErrandRequestsContainer = ({ navigation }) => {
  return <ErrandRequests navigation={navigation} />;
};

export default ErrandRequestsContainer;
