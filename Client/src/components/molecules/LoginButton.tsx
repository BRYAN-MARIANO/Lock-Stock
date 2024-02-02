import { FC, ReactNode } from 'react';
import React from 'react';

interface LoginButtonProps {
  onClick?: () => void ;
  children: ReactNode;
}

const LoginButton: FC<LoginButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="w-[698px] h-[53.27px] rounded-[7.61px] bg-[#1D7607] text-white text-base font-semibold flex justify-center items-center border-none cursor-pointer"
    >
      {children}
    </button>
  );
};

export default LoginButton;
