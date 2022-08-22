import { useQuery } from 'react-query';
import { checkAuthStatus } from '../../api/authReq';

const AuthWrapper = (props) => {
    const authStatus = useQuery('authstatus', checkAuthStatus, { initialData: { user: undefined, isLoggedIn: false } });
    return (
        <>
            {
                authStatus.isFetched ? 
                  (
                    authStatus.data.isLoggedIn ?
                    (
                      <>
                      {props.children}
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