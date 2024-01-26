import { FC } from 'react';
import Button from '../atoms/Buttons';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const GoogleSignInButton: FC = () => {
  const handleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('profileObj' in response) {
      console.log('Usuario autenticado:', response.profileObj);
    }
  };

  const handleLoginFailure = (error: any) => {
    console.error('Error de autenticación con Google:', error);
  };

  return (
    <GoogleLogin
      clientId="TU_CLIENT_ID"
      buttonText="Iniciar sesión con Google"
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginFailure}
      cookiePolicy={'single_host_origin'}
      render={renderProps => (
        <Button onClick={renderProps.onClick} disabled={renderProps.disabled} className="w-[698px] h-[53.27px] relative">
          <span className="absolute left-4">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google sign-in" width="24" height="24" />
          </span>
          <span className="ml-6 text-lg font-bold text-black mb-4">Iniciar sesión con Google</span>
        </Button>
      )}
    />
  );
};

export default GoogleSignInButton;

