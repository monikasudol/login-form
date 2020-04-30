type Validator = {
  isValidFun: (expression: string) => any;
  helperText: string;
}

export interface IInput {
  error: boolean;
  name: string;
  label: string;
  type: string;
  value: string;
  validator: Validator;
  onChange?: (event: any) => void;
}
