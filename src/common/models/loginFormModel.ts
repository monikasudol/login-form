import helpers from '../helpers/helpers';
import { IInput } from '../types/common';

const loginFormModel: IInput[] = [{
  error: false,
  value: '',
  name: 'email',
  label: 'Email',
  type: 'text',
  validator: {
    isValidFun: (expression: string) => helpers.validateEmail(expression),
    helperText: 'Not valid email address',
  },
}, { 
  error: false,
  value: '',
  name: 'password',
  label: 'Password',
  type: 'password',
  validator: {
    isValidFun: (expression: string) => helpers.checkMinLength(expression, 5),
    helperText: 'Password is too short',
  },
}];

export default loginFormModel;
