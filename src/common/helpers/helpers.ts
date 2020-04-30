import { IInput } from '../types/common';

const getRandomElement = (elements: any[]) => elements[Math.floor(Math.random()*elements.length)];

export const checkMinLength = (expression: string, length: number) => expression && expression.trim().length >= length;

const validateEmail = (email: string) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return emailRegex.test(email);
};

const getValuesFromInputs = (array: IInput[]) => {
  let objValues = {};
  array.forEach((arr: any) => objValues = { ...objValues, [arr.name]: arr.value });
  return objValues;
};


export default {
  getRandomElement,
  checkMinLength,
  validateEmail,
  getValuesFromInputs,
};
