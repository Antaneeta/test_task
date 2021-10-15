import React from 'react';
import 'react-native-gesture-handler';

import Routes from "./navigation/Routes";
import {AuthProvider} from "./navigation/AuthProvider";

const App = () => {
  return(
      <AuthProvider>
        <Routes />
      </AuthProvider>
  );
};

export default App;
