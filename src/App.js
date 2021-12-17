import React from 'react';
import CacheBuster from 'react-cache-buster';

import { version } from '../package.json';
import HexTime from './HexTime/';
import Loading from './Loading';

const App = () => {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={isProduction}
      isVerboseMode={false}
      loadingComponent={<Loading />}
    >
      <HexTime />
    </CacheBuster>
  );
};

export default App;
