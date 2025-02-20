import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import logoImage from "../../assets/img/logos/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Row, Col, Button } from "react-bootstrap";
import Cookies from "js-cookie";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setFullname, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setErrorMessage("");

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL_LOGIN}`,
          values
        );
        const { token, fullname, userId } = response.data;

        setFullname(fullname); // Save fullname to global context
        setToken(token); // Save token to global context
        Cookies.set("authToken", token, { expires: 1 });

        toast.success(`Welcome, ${fullname}!`);

        navigate("/dashboard");

      } catch (error) {
        if (error.response) {
          const errorMsg = error.response.data.message || "Server Error";
          setErrorMessage(`Sign in failed: ${errorMsg}`);
          toast.error(`Sign in failed: ${errorMsg}`);
        } else if (error.request) {
          setErrorMessage(
            "No response from the server. Please try again later."
          );
          toast.error("No response from the server. Please try again later.");
        } else {
          setErrorMessage(
            "Failed to sign in. Please check your network connection and try again."
          );
          toast.error(
            "Failed to sign in. Please check your network connection and try again."
          );
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="contact-form">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="login-inner-form">
              <div className="details">
                <Link to="/">
                  <img src={logoImage} alt="logo" />
                </Link>
                <h3>Sign into your account</h3>
                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}
                <form onSubmit={formik.handleSubmit}>
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
                  {/* <div className="checkbox clearfix">
                      <div className="form-check checkbox-theme">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="rememberMe"
                          id="rememberMe"
                          onChange={formik.handleChange}
                          checked={formik.values.rememberMe}
                        />
                        <label className="form-check-label" htmlFor="rememberMe">
                          Remember me
                        </label>
                      </div>
                    </div> */}
                  <div className="">

                    <Button
                      style={{ background: "linear-gradient(140deg, #e4ad35, #f1cf2e)", border: 'none' }}
                      type="submit"
                      className="w-50"
                      disabled={loading}
                    >
                      {loading ? "Signing in..." : "Sign in"}
                    </Button>


                  </div>
                </form>
                {/* <ul className="social-list clearfix">
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
                </ul> */}


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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
