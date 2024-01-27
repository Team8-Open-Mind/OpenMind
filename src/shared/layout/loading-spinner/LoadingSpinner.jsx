import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Spinner from '@components/ui/atoms/loading/spinner/Spinner';

const LoadingSpinner = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Outlet />
    </Suspense>
  );
};

export default LoadingSpinner;
