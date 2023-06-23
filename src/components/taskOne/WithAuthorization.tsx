import React from 'react';

function WithAuthorization (WrappedComponent: React.ComponentType) {
  const authorization = ({ authorized, ...props }: {authorized: boolean}) => {
    if (authorized) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };

  return authorization;
};

export default WithAuthorization;

