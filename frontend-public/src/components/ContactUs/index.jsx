import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import Select from "react-select";
import Navbar from "../Navbar";
import Footer from "../Footer";
import useAdjustHeader from "../../hooks/useAdjustHeader";
import { toast } from "sonner";
import { constaUs } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faPhoneAlt, faEnvelope, faLocationDot  } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
  const validationSchema = Yup.object({
    fullname: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    service: Yup.array().min(1, "At least one Service is required"),
    phone: Yup.string().required("Phone number is required"),
    // message: Yup.string().required("Message is required"),
  });

  useAdjustHeader();

  return (
    <>
      <Navbar />
      <div className="sub-banner overview-bgi">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>Start with a Project</h1>
            <ul className="breadcrumbs">
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li className="active">Start with a Project</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="contact-2 content-area-2">
        <div className="container">
          <div className="main-title text-center">
            <h1>Start with a Project</h1>
            <p>Have questions or need support? Get in touch with us by filling out the form below, and we'll respond promptly.</p>
          </div>
          <Formik
            initialValues={{
              fullname: "",
              email: "",
              service: [],
              phone: "",
              // message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              const formData = {
                properties: {
                  fullname: values.fullname,
                  email: values.email,
                  phone: values.phone,
                  service: values.service.join(", "),
                  // messages: values.message,
                },
              };

              try {
                const response = await axios.post(
                  `${process.env.REACT_APP_API_URL_CONTACT}`,
                  formData
                );
                if (response.status === 200) {
                  toast.success("Message sent successfully!");
                  resetForm();
                }
              } catch (error) {
                toast.error("There was an error submitting the form!");
                console.error("There was an error submitting the form!", error);
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <div className="row" style={{
                  border: '1px solid #606676',
                  padding: '30px',
                  // background: '#f9f9f9',
                  borderRadius: '20px'
                }}>
                  <div className="col-lg-7">
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group name">
                          <Field
                            type="text"
                            name="fullname"
                            className="form-control"
                            placeholder="Full Name"
                          />
                          <ErrorMessage
                            name="fullname"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <div className="form-group email">
                          <Field
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group number">
                          <Field
                            type="text"
                            name="phone"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group subject">
                        <Select
                          isMulti
                          name="service"
                          options={constaUs.map((option) => ({
                            value: option,
                            label: option,
                          }))}
                          className="basic-multi-select"
                          classNamePrefix="select"
                          onChange={(selectedOptions) =>
                            setFieldValue(
                              "service",
                              selectedOptions ? selectedOptions.map((option) => option.value) : []
                            )
                          }
                          styles={{
                            control: (provided) => ({
                              ...provided,
                              backgroundColor: '#f9f9f9', // Light blue background
                              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
                              // borderColor: 'blue', // Border color
                              '&:hover': {
                                borderColor: 'darkblue', // Darker border on hover
                              },
                            }),
                            multiValue: (provided, state) => ({
                              ...provided,
                              backgroundColor: '#e0e0e0', // Background color of selected options
                              opacity: 0, // Start with hidden option
                              transform: 'scale(0.9)', // Start slightly smaller
                              transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out', // Fade and scale transition
                              animation: 'fadeIn 0.3s forwards', // Trigger animation
                            }),
                            multiValueLabel: (provided) => ({
                              ...provided,
                              color: 'black', // Text color of selected options
                            }),
                            multiValueRemove: (provided) => ({
                              ...provided,
                              color: 'red', // Color of remove button
                              '&:hover': {
                                backgroundColor: 'lightcoral', // Background color on hover
                                color: 'white',
                              },
                            }),
                          }}
                        />
                        <ErrorMessage
                          name="service"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="send-btn text-center">
                        <button
                          type="submit"
                          className="btn btn-md button-theme"
                          style={{background: "linear-gradient(140deg, #e4ad35, #f1cf2e)"}}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>{" "}
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="contact-info">
                      <h3>Contact Info</h3>
                      <div className="media">
                        <FontAwesomeIcon icon={faLocationDot} size="2x" className="mr-3" style={{ color: '#f1cf2e' }}/>
                        <div className="media-body">
                          <h5>Office Address</h5>
                          <p>SPC Free Zone Sharjah, UAE</p>
                        </div>
                      </div>
                      <div className="media">
                        <FontAwesomeIcon icon={faPhoneAlt} size="2x" className="mr-3" style={{ color: '#f1cf2e' }}/>
                        <div className="media-body">
                          <h5>Phone Number</h5>
                          <p>
                            Mobile
                            <a href="tel:+971-50-426-4650">
                              : +971 50 426 4650
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="media mb-0">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" className="mr-3" style={{ color: '#f1cf2e' }} />
                        <div className="media-body">
                          <h5>Email Address</h5>
                          <p>
                            <a href="mailto:info@codeanew.com">
                              info@codeanew.com
                            </a>
                          </p>
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
      <Footer />
    </>
  );
};

export default ContactForm;
