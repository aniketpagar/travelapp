import { useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { gapi } from 'gapi-script';

const GoogleLogin = ({ onSuccess, onError }) => {
  const clientId = '616522122264-ujir37p850q6khc5cft8okmsd1mbo879.apps.googleusercontent.com.apps.googleusercontent.com';

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: 'email profile openid',
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${response.access_token}` }
        });
        const userData = await res.json();
        onSuccess({ ...response, ...userData });
      } catch (error) {
        onError(error);
      }
    },
    onError: (error) => onError(error),
  });

  return (
    <button onClick={() => login()} className="google-login-button">
      Continue with Google
    </button>
  );
};

export default GoogleLogin;