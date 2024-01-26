import { FC, useState } from 'react';
import RegisterCard from '../organisms/RegisterCard'
import LoginCard from '../organisms/LoginCard';

const AuthenticationPage: FC = () => {
  const [activeCard, setActiveCard] = useState<'login' | 'register'>('login');

  return (
    <div className="auth-container flex flex-col items-center justify-center">
      {activeCard === 'register' ? (
        <RegisterCard
          switchToLogin={() => setActiveCard('login')}
          isActive={activeCard === 'register'}
        />
      ) : (
        <LoginCard
          switchToRegister={() => setActiveCard('register')}
          isActive={activeCard === 'login'}
        />
      )}
    </div>
  );
};

export default AuthenticationPage;