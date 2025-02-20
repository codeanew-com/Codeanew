// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import logoImage from "../../assets/img/logos/logo.png";
// import { Link } from "react-router-dom";
// import { toast } from "sonner"; // Import the sonner toast
// import { Row, Col, Button } from "react-bootstrap";

// const Login = () => {
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(8, "Password must be at least 8 characters")
//       .required("Password is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//       rememberMe: false,
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//       setLoading(true);
//       setErrorMessage("");

//       try {
//         const response = await axios.post(
//           `${process.env.REACT_APP_API_URL_LOGIN}`,
//           values
//         );
//         console.log("Form Submitted", response.data);
//         // Display success message using Sonner toast
//         toast.success("Logged in successfully!");

//         // Perform additional actions, e.g., redirecting the user or storing tokens
//       } catch (error) {
//         if (error.response) {
//           console.error("Server responded with error:", error.response.status);
//           const errorMsg = error.response.data.message || "Server Error";
//           setErrorMessage(`Sign in failed: ${errorMsg}`);

//           // Display error message using Sonner toast
//           toast.error(`Sign in failed: ${errorMsg}`);
//         } else if (error.request) {
//           console.error("No response from the server", error.request);
//           setErrorMessage(
//             "No response from the server. Please try again later."
//           );

//           // Display error message using Sonner toast
//           toast.error("No response from the server. Please try again later.");
//         } else {
//           console.error("Error setting up request:", error.message);
//           setErrorMessage(
//             "Failed to sign in. Please check your network connection and try again."
//           );

//           // Display error message using Sonner toast
//           toast.error(
//             "Failed to sign in. Please check your network connection and try again."
//           );
//         }
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <div className="contact-form">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="login-inner-form">
//               <div className="details">
//                 <Link to="/">
//                   <img src={logoImage} alt="logo" />
//                 </Link>
//                 <h3>Sign into your account</h3>
//                 {errorMessage && (
//                   <div className="error-message">{errorMessage}</div>
//                 )}{" "}
//                 {/* Show error message */}
//                 <form onSubmit={formik.handleSubmit}>
//                   <div className="form-group">
//                     <input
//                       type="email"
//                       name="email"
//                       className="input-text"
//                       placeholder="Email Address"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.email}
//                     />
//                     {formik.touched.email && formik.errors.email ? (
//                       <div className="error">{formik.errors.email}</div>
//                     ) : null}
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="password"
//                       name="password"
//                       className="input-text"
//                       placeholder="Password"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.password}
//                     />
//                     {formik.touched.password && formik.errors.password ? (
//                       <div className="error">{formik.errors.password}</div>
//                     ) : null}
//                   </div>
//                   <div className="checkbox clearfix">
//                     <div className="form-check checkbox-theme">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         name="rememberMe"
//                         id="rememberMe"
//                         onChange={formik.handleChange}
//                         checked={formik.values.rememberMe}
//                       />
//                       <label className="form-check-label" htmlFor="rememberMe">
//                         Remember me
//                       </label>
//                     </div>
//                     {/* <Link to="/forgot-password">Forgot Password</Link> */}
//                   </div>

//                   <div className="form-group mb-0">
//                     <Row className="justify-content-center">
//                       <Col xs="auto">
//                         <Button
//                           type="submit"
//                           className="btn-md button-theme btn-block"
//                           disabled={loading}
//                         >
//                           {loading ? "Signing in..." : "Sign in"}
//                         </Button>
//                       </Col>
//                     </Row>
//                   </div>
//                 </form>
//                 <ul className="social-list clearfix  ">
//                   <li className="mx-2">
//                     <a href="https://www.instagram.com/codeanew/" className="facebook-bg">
//                       <i className="fa fa-instagram"></i>
//                     </a>
//                   </li>

//                   <li className="mx-2">
//                     <a href="https://www.linkedin.com/company/codeanew/about/" className="linkedin-bg">
//                       <i className="fa fa-linkedin"></i>
//                     </a>
//                   </li>
//                 </ul> 
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;






import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import logoImage from "../../assets/img/logos/logo.png";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirecting
import { toast } from "sonner"; // Import the sonner toast
import { Row, Col, Button } from "react-bootstrap";
import Cookies from "js-cookie"; // Import js-cookie to store the token

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Create navigate instance

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
        const { token, fullname, userId } = response.data; // Extract token and other data from response
        console.log("Form Submitted", response.data);

        // Save the token in cookies
        Cookies.set("authToken", token, { expires: 1 }); // Token will expire in 1 day

        // Display success message using Sonner toast
        toast.success("Logged in successfully!");

        // Redirect the user to the dashboard
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
                  <div className="checkbox clearfix">
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
                  </div>
                  <div className="form-group mb-0">
                    <Row className="justify-content-center">
                      <Col xs="auto">
                        <Button
                          type="submit"
                          className="btn-md button-theme btn-block"
                          disabled={loading}
                        >
                          {loading ? "Signing in..." : "Sign in"}
                        </Button>
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
  );
};

export default Login;
