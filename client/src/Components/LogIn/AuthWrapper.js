import React from 'react';
import { useQuery } from 'react-query';
import { checkAuthStatus } from '../../api/authReq';

const AuthWrapper = ({ children }) => {
    const authStatus = useQuery('authstatus', checkAuthStatus, { initialData: { user: undefined, isLoggedIn: false } });
    const childrenWithProps = React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { currUser: authStatus.data.user });
      }
      return child;
    });
    return (
        <>
            {
                authStatus.isFetched ? 
                  (
                    authStatus.data.isLoggedIn ?
                    (
                      <>
                      {childrenWithProps}
                      </>
                    )
                    :
                    window.location.assign('/login')
                  )
                  :
                  <h1>LOADING...</h1>
            }
        </>
    )
}

export default AuthWrapper;