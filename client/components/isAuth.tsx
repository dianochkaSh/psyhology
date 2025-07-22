import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useTypedSelector } from '@/hooks/useTypedSelector';

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const { isAuthenticated } = useTypedSelector(state => state.signInForm);
    const router = useRouter();


    useEffect(() => {
      const isAuth = window.localStorage.getItem("access_token") ? true : false;
      if (!isAuth) {
        return  router.push('/');
      }
    }, []);


    if (!isAuth) {
      return null;
    }

    return <Component {...props} />;
  };
}