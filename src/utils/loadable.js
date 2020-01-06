import React, { Suspense, lazy } from 'react';

const loadable = (importFunc, fallback = null) => {
  const LazyComponent = lazy(importFunc);
  const Loadable = props => (
    <Suspense fallback={fallback || 'Loading...'}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return Loadable;
};

export default loadable;
