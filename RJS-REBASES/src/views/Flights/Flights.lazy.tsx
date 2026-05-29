import React, { Suspense } from 'react';

const LazyFlights = React.lazy(() => import('./Flights'));

/**
 * USAGE: Flights description to complete.
 * @example
 * <Flights /> 
 */
const Flights = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={<><br/>Flights Data Loading</>}>
    <LazyFlights {...props} />
  </Suspense>
);
Flights.displayName = 'Flights Lazy Loaded';

export default Flights;
