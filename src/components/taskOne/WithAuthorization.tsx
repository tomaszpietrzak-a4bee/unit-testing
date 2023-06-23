import React from 'react';
import RestrictedComponent from './RestrictedComponent';

function WithAuthorization (WrappedComponent: React.ComponentType) {
  const authorization = ({ authorized, ...props }: {authorized: boolean}) => {
    if (authorized) {
      return <WrappedComponent {...props} />;
      // return <div>random div</div>;
      // return null
    } else {
      // return <WrappedComponent {...props} />;
      // return <RestrictedComponent/>;
      // return <div>random div</div>;
      return null;
    }
  };

  return authorization;
};

export default WithAuthorization;

