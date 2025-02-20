// src/components/ContactForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; // Import Axios
import useAdjustHeader from '../../hooks/useAdjustHeader';
import '../../assets/css/skins/customStyle.css'; 

const ContactForm = () => {
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        subject: Yup.string().required('Subject is required'),
        phone: Yup.string().required('Phone number is required'),
        message: Yup.string().required('Message is required'),
    });

    useAdjustHeader();

    return (
        <div className="contact-2 content-area-2">
            <div className="container">
                <Formik
                    initialValues={{ name: '', email: '', subject: '', phone: '', message: '' }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            const response = await axios.post('http://localhost:5000/api/user/contactus', values);
                            console.log('Form Submitted', response.data);
                        } catch (error) {
                            console.error('There was an error submitting the form!', error);
                        }
                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group name">
                                                <Field type="text" name="name" className="form-control" placeholder="Name" />
                                                <ErrorMessage name="name" component="div" className="text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group email">
                                                <Field type="email" name="email" className="form-control" placeholder="Email" />
                                                <ErrorMessage name="email" component="div" className="text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group subject">
                                                <Field type="text" name="subject" className="form-control" placeholder="Subject" />
                                                <ErrorMessage name="subject" component="div" className="text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group number">
                                                <Field type="text" name="phone" className="form-control" placeholder="Number" />
                                                <ErrorMessage name="phone" component="div" className="text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group message">
                                                <Field as="textarea" name="message" className="form-control" placeholder="Write message" />
                                                <ErrorMessage name="message" component="div" className="text-danger" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="send-btn text-center">
                                                <button type="submit" className="btn btn-md button-theme" disabled={isSubmitting}>
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default ContactForm;
