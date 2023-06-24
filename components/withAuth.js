import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';

const withAuth = (WrappedComponent) => {

  const AuthenticatedComponent = (props) => {
    const router = useRouter();

    const checkUserAuthentication=()=>{
      return false
    }
    // Simulated authentication check
    let isAuthenticated = checkUserAuthentication(); // Replace with your authentication logic


    useEffect(() => {
      try{
        isAuthenticated=localStorage.getItem('isAuthenticated')
        console.log(isAuthenticated,typeof(isAuthenticated));
        if (isAuthenticated=="false" || isAuthenticated==="") {
          router.push('/login'); // Redirect to login page if not authenticated
        }
        if (!isAuthenticated) {
          router.push('/login'); // Redirect to login page if not authenticated
        }
      }catch(ex){
        router.push('/login');
      }
    }, [isAuthenticated,router]);

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
