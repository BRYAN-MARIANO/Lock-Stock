import { FC } from 'react';

interface InputProps {
  id: string;
  type: string;
  label: string;
}

const Input: FC<InputProps> = ({ id, type, label }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block mb-2 text-sm text-gray-600">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      required
      className="w-full h-14 rounded-lg border border-black bg-white mb-4"
      style={{ color: 'black' }}
    />
  </div>
);

export default Input;


