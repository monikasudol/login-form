import React, { FunctionComponent, ReactNode } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Input from '../Input/Input';
import useForm from '../../hooks/useForm';
import { IInput } from '../../types/common';
import * as styles from './Form.module.scss';

interface IFormProps {
  showAvatar?: boolean;
  onSubmit: () => void;
  submitButtonText: string;
  formInputs: IInput[];
  children?: ReactNode;
}

const Form: FunctionComponent<IFormProps> = ({ formInputs, children, showAvatar, onSubmit, submitButtonText }) => {
  const [inputs, handleInputs, setSubmit] = useForm(formInputs, onSubmit);

  return (
    <div className={styles.container}>
      {showAvatar && <Avatar />}
      <form className={styles.form} autoComplete='off' onSubmit={setSubmit}>
         {inputs.map((input: IInput) => <Input
            required
            value={input.value}
            label={input.label}
            key={input.name}
            name={input.name}
            onChange={handleInputs}
            type={input.type}
            error={input.error}
            helperText={input.validator.helperText}
          />)}
        <Button
          type='submit'
          variant='contained'
          color='primary'
        >
          {submitButtonText}
        </Button>
      </form>
      {children}
    </div>
  )
}

export default Form;
