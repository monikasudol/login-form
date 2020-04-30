import React, { FunctionComponent } from 'react';
import TextField from '@material-ui/core/TextField';

interface IInputProps {
  value: string;
  name: string;
  label: string;
  onChange: any;
  error?: any;
  helperText?: string;
  type?: string;
  required?: boolean;
}

const Input: FunctionComponent<IInputProps> = ({
  value, name, label, onChange, error, helperText, type,
} : IInputProps) => (
    <TextField variant='outlined'
      margin='normal'
      required
      value={value}
      onChange={(e) => onChange(e)}
      id={name}
      label={label}
      name={name}
      error={error}
      helperText={error && helperText}
      type={type}
      autoComplete={name}
      autoFocus
    />
  )

export default Input;
