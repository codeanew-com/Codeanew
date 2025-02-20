import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "sonner";
import { Row, Col, Form, Button } from "react-bootstrap";
import Logo from "../../assets/img/logos/logo.png";
import { AuthContext } from '../../context/AuthContext'; // Adjust path as needed
import Footer from "../Footer";
import NavDash from "../Dashoard/NavDash";
import './SignUp.css';  // Import the CSS file for custom styles

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);

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
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const existingUserResponse = await axios.get(
          `${process.env.REACT_APP_API_URL_CHECK_EMAIL}/${values.email}`,
          {
            headers: {
              'X-Access-Token': token
            }
          }
        );

        if (existingUserResponse.data.exists) {
          toast.error("Email already in use. Please use a different email.");
          setLoading(false);
          return;
        }

        const response = await axios.post(
          `${process.env.REACT_APP_API_URL_SIGNUP}`,
          values,
          {
            headers: {
              'Content-Type': 'application/json',
              'X-Access-Token': token,
            },
          }
        );

        console.log("Form Submitted", response.data);
        toast.success("User Added Successfully!");
      } catch (error) {
        console.error("Error submitting the form", error);
        toast.error("There was an error submitting the form. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <NavDash />


      <div className="sub-banner overview-bgi">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>Add New User</h1>
          </div>
        </div>
      </div>
      <div className="signup-container vh-100 d-flex  justify-content-center">
        {/* <Row className="w-100 h-100 g-0"> Remove gutters (spacing between columns) */}
        {/* Left Column - Form */}
        {/* <Col
            xs={12} md={6}
            className="d-flex align-items-center justify-content-center signup-form-col"
          > */}
        <div className="w-50">
          <div className="text-center mb-4">
            {/* <img src={Logo} alt="logo" className="img-fluid" /> */}
          </div>
          <h3 className="text-center mb-4">Create New User</h3>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="fullname"
                placeholder="Full Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullname}
                isInvalid={formik.touched.fullname && !!formik.errors.fullname}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.fullname}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                isInvalid={formik.touched.email && !!formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                isInvalid={formik.touched.password && !!formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <div className=" justify-content-center align-content-center d-flex">

              <Button
                // style={{
                //   backgroundColor: " #e4ad35",
                //   padding: 'none',
                //   border: 'none'
                // }}

                style={{ background: "linear-gradient(140deg, #e4ad35, #f1cf2e)", border: 'none' }}

                variant="primary"
                type="submit"
                className='w-50'
                disabled={loading}
              >
                {loading ? "Submitting..." : "Sign up"}
              </Button>
            </div>
          </Form>

          <div className="text-center mt-4">
            <ul className="list-inline">
              <li className="list-inline-item mx-2">
                <a href="https://www.instagram.com/codeanew/">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="https://www.linkedin.com/company/codeanew/about/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
