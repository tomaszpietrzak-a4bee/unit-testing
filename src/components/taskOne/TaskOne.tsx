import { useState } from 'react';
import RestrictedComponent from './RestrictedComponent';
import WithAuthorization from './WithAuthorization';


const AuthorizedComponent = WithAuthorization(RestrictedComponent);

function TaskOne() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handleToggleAuth = () => {
      setIsAuthenticated(!isAuthenticated); 
    };
  
    return (
      <>
        <h1>Zadanie 1</h1>
        <button onClick={handleToggleAuth}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
        <AuthorizedComponent authorized={isAuthenticated} />
      </>
    );
  }
  
  export default TaskOne;
  