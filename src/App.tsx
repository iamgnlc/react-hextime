import type { ReactNode } from 'react';
import { useEffect } from 'react';
import CacheBuster from 'react-cache-buster';

import { version } from '../package.json';
import HexTime from './HexTime/';
import Loading from './Loading';

const isProduction = import.meta.env.PROD;

const Head = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    document.title = 'HexTime';
    document
      .querySelector('meta[name="robots"]')
      ?.setAttribute('content', 'noindex');
    document
      .querySelector('meta[name="author"]')
      ?.setAttribute('content', 'GNLC');
  }, []);

  return <>{children}</>;
};

const App = () => (
  <CacheBuster
    currentVersion={version}
    isEnabled={isProduction}
    isVerboseMode={false}
    loadingComponent={<Loading />}
    onCacheClear={() => window.location.reload()}
  >
    <Head>
      <HexTime />
    </Head>
  </CacheBuster>
);

export default App;
