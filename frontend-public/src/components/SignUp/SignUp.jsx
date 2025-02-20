import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Image from "../../assets/img/logos/logo.png";
import { toast } from "sonner";
import { Row, Col } from "react-bootstrap";
import NavDash from "../Dashoard/NavDash";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object({
    fullname: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    agreeToTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms of service"
    ),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      // agreeToTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL_SIGNUP}`,
          values
        );
        console.log("Form Submitted", response.data);
        toast.success("Signup successful!");
      } catch (error) {
        console.error("Error submitting the form", error);
        toast.error(
          "There was an error submitting the form. Please try again."
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <NavDash />
      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login-inner-form">
                <div className="details">
                  <a href="index.html">
                    <img src={Image} alt="logo" />
                  </a>
                  <h3>Create an account</h3>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="fullname"
                        className="input-text"
                        placeholder="Full Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullname}
                      />
                      {formik.touched.fullname && formik.errors.fullname ? (
                        <div className="error">{formik.errors.fullname}</div>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="input-text"
                        placeholder="Email Address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                      ) : null}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        className="input-text"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="error">{formik.errors.password}</div>
                      ) : null}
                    </div>
                    <div className="checkbox clearfix">
                      
                    </div>

                    <div className="form-group mb-0">
                      <Row className="justify-content-center">
                        <Col xs="auto">
                          <button
                            type="submit"
                            className="btn-md button-theme btn-block"
                            disabled={loading}
                          >
                            {loading ? "Submitting..." : "Sign up"}
                          </button>
                        </Col>
                      </Row>
                    </div>
                  </form>

                  <ul className="social-list clearfix">
                    <li className="mx-2">
                      <a
                        href="https://www.instagram.com/codeanew/"
                        className="facebook-bg"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>

                    <li className="mx-2">
                      <a
                        href="https://www.linkedin.com/company/codeanew/about/"
                        className="linkedin-bg"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Signup component
export default Signup;
