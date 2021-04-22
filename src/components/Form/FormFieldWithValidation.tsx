import React from 'react';
import { FormikErrors, FormikTouched, FormikValues } from 'formik';
import { FormField } from './FormField';

export const FormFieldWithValidation: React.FC<{
  errors: FormikErrors<FormikValues>;
  name: string;
  touched: FormikTouched<FormikValues>;
  type?: string;
  validate: Function;
}> = ({ errors, name, touched, type, validate }) => {
  return (
    <>
      <FormField name={name} type={type} validate={validate} />
      {errors[name] && touched[name] && <div>{errors[name]}</div>}
    </>
  );
};
