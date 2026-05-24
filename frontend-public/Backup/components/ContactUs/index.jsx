import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";
import Select from "react-select";
import { toast } from "sonner";
import { serviceOptions } from "../../constants/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SubBannerBg from "../../assets/img/img-5.png";

const validationSchema = Yup.object({
  fullname: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  service: Yup.array().min(1, "At least one service is required"),
  phone: Yup.string().required("Phone number is required"),
});

const ContactInfo = ({ icon, title, children }) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
      <FontAwesomeIcon icon={icon} className="icon-gold text-lg" />
    </div>
    <div>
      <h5 className="font-semibold text-heading text-sm mb-0.5">{title}</h5>
      {children}
    </div>
  </div>
);

const ContactForm = () => {
  return (
    <>

      {/* Sub Banner */}
      <div
        className="sub-banner"
        style={{ backgroundImage: `url(${SubBannerBg})` }}
      >
        <div className="sub-banner-content">
          <h1>Start with a Project</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="active">Start with a Project</li>
          </ul>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h1>Start with a Project</h1>
            <p>Have questions or need support? Fill out the form and we'll respond promptly.</p>
          </div>

          <Formik
            initialValues={{ fullname: "", email: "", service: [], phone: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                const response = await axios.post(
                  `${process.env.REACT_APP_API_URL_CONTACT}`,
                  {
                    properties: {
                      fullname: values.fullname,
                      email: values.email,
                      phone: values.phone,
                      service: values.service.join(", "),
                    },
                  }
                );
                if (response.status === 200) {
                  toast.success("Message sent successfully!");
                  resetForm();
                }
              } catch (error) {
                toast.error("There was an error submitting the form!");
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form>
                <div className="flex flex-col lg:flex-row gap-8 border border-gray-300 rounded-2xl p-8 bg-white shadow-card-sm">
                  {/* Left — form fields */}
                  <div className="lg:w-7/12 flex flex-col gap-5">
                    <div>
                      <Field
                        type="text"
                        name="fullname"
                        className="form-input"
                        placeholder="Full Name"
                      />
                      <ErrorMessage name="fullname" component="p" className="text-red-500 text-xs mt-1 mb-0" />
                    </div>

                    <div>
                      <Field
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Email Address"
                      />
                      <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1 mb-0" />
                    </div>

                    <div>
                      <Field
                        type="text"
                        name="phone"
                        className="form-input"
                        placeholder="Phone Number"
                      />
                      <ErrorMessage name="phone" component="p" className="text-red-500 text-xs mt-1 mb-0" />
                    </div>

                    <div>
                      <Select
                        isMulti
                        name="service"
                        options={serviceOptions.map((o) => ({ value: o, label: o }))}
                        placeholder="Select Services..."
                        classNamePrefix="rselect"
                        onChange={(sel) =>
                          setFieldValue("service", sel ? sel.map((o) => o.value) : [])
                        }
                        styles={{
                          control: (b) => ({
                            ...b,
                            minHeight: '3.25rem',
                            borderColor: '#d1d5db',
                            borderRadius: '0.375rem',
                            boxShadow: 'none',
                            '&:hover': { borderColor: '#e4ad35' },
                          }),
                          multiValue: (b) => ({ ...b, backgroundColor: '#fef3c7', borderRadius: '0.25rem' }),
                          multiValueLabel: (b) => ({ ...b, color: '#2f2f2f', fontWeight: 500 }),
                          multiValueRemove: (b) => ({
                            ...b,
                            color: '#e4ad35',
                            '&:hover': { backgroundColor: '#fcd34d', color: '#fff' },
                          }),
                        }}
                      />
                      <ErrorMessage name="service" component="p" className="text-red-500 text-xs mt-1 mb-0" />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="btn-theme w-full sm:w-auto px-10 py-3.5"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Sending…
                          </>
                        ) : "Send Message"}
                      </button>
                    </div>
                  </div>

                  {/* Right — contact info */}
                  <div className="lg:w-5/12 lg:pl-8 lg:border-l border-gray-100 pt-6 lg:pt-0">
                    <h3 className="text-2xl font-bold text-heading mb-7">Contact Info</h3>

                    <ContactInfo icon={faLocationDot} title="Office Address">
                      <p className="text-sm text-muted m-0">SPC Free Zone Sharjah, UAE</p>
                    </ContactInfo>

                    <ContactInfo icon={faPhoneAlt} title="Phone Number">
                      <a href="tel:+971504264650" className="text-sm text-muted hover:text-gold transition-colors">
                        +971 50 426 4650
                      </a>
                    </ContactInfo>

                    <ContactInfo icon={faEnvelope} title="Email Address">
                      <a href="mailto:info@codeanew.com" className="text-sm text-muted hover:text-gold transition-colors">
                        info@codeanew.com
                      </a>
                    </ContactInfo>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>

    </>
  );
};

export default ContactForm;
