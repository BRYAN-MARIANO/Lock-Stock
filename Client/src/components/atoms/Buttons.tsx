import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled, className }) => (
  <button
    onClick={onClick}
    className={`w-[698px] h-[53.27px] rounded-[7.61px] border border-black bg-white flex-shrink-0 text-sm ${className}`}
  >
    {children}

  </button>
);

export default Button;

