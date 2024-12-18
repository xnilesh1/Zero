import * as React from 'react';
import { Input as BaseInput } from '@mui/base/Input';
import { styled } from '@mui/system';
import { useMessage } from './MessageContext'; // Import the shared context

const Input = React.forwardRef(function CustomInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

export default function UnstyledInputIntroduction() {
  return <Input aria-label="Demo input" placeholder="I'm going to study..." />;
}




const blue = {
  200: '#3C8BFF',
  400: '#1A73E8',
  600: '#135FBA',
};

const grey = {
  800: '#2A2E35',
  900: '#1E1E1E',
  300: '#AAB4C2',
  200: '#E0E0E0',
};

const InputElement = styled('input')(
  ({ theme }) => `
  width: 400px; /* Increased width */
  height: 50px; /* Added height for better sizing */
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  padding: 10px 16px;
  border-radius: 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[800] : '#F8F9FA'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  box-shadow: 0 4px 8px ${
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.1)'
  };
  transition: all 0.2s ease;

  &:hover {
    border-color: ${blue[200]};
    box-shadow: 0 4px 12px rgba(60, 139, 255, 0.3);
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  &:focus-visible {
    outline: none;
  }
`
);


