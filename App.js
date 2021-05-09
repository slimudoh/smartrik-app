import React, {useEffect} from 'react';
import type {Node} from 'react';
import SplashScreen from 'react-native-splash-screen';

import Onboarding from './navigation/Onboarding';

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <Onboarding />;
};

export default App;
