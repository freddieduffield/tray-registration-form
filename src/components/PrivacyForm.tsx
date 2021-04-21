import {Field, Form, Formik} from "formik";
import React from "react";
import { useHistory } from 'react-router-dom'
import {PrivacySettings} from "../types";
import {Dispatch} from "redux";
import {useDispatch} from "react-redux";
import {updateUser} from "../state/User/actions";
import {SubmitButton} from "./Form/SubmitButton";
import './Form/Form.css';

export const PrivacyForm: React.FC<{}> = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const history = useHistory()

    const initialValues: PrivacySettings = {
        receiveTrayUpdates: false,
        receiveOtherProductsCommunication: false
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                dispatch(updateUser(values));
                history.push('/user/done');
                actions.setSubmitting(false);
            }}
        >
            <Form className="form">
                <label>
                    <Field className="checkbox" type="checkbox" name="receiveTrayUpdates"/>
                    Receive updates about Tray.io product by email

                </label>
                <label>
                    <Field className="checkbox" type="checkbox" name="receiveOtherProductsCommunication"/>
                    Receive communication by email for other products created by the Tray.io team
                </label>
                <SubmitButton />
            </Form>
        </Formik>
    );
}
