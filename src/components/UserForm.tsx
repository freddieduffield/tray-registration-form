import React from 'react';
import { Dispatch } from 'redux';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateUser } from '../state/User/actions';
import { PersonalDetails } from '../types';
import {
  validateEmail,
  validateName,
  validatePassword,
} from './Form/formValidation';
import { FormField } from './Form/FormField';
import { FormFieldWithValidation } from './Form/FormFieldWithValidation';
import { SubmitButton } from './Form/SubmitButton';

export const UserForm: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const history = useHistory();

  const initialValues: PersonalDetails = {
    name: '',
    role: '',
    email: '',
    password: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        dispatch(updateUser(values));
        history.push('/user/privacy');
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Form className="form">
          <FormFieldWithValidation
            errors={errors}
            name="name"
            validate={validateName}
            touched={touched}
          />
          <FormField name="role" />
          <FormFieldWithValidation
            errors={errors}
            name="email"
            type="email"
            validate={validateEmail}
            touched={touched}
          />
          <FormFieldWithValidation
            errors={errors}
            name="password"
            type="password"
            validate={validatePassword}
            touched={touched}
          />
          <SubmitButton />
        </Form>
      )}
    </Formik>
  );
};
