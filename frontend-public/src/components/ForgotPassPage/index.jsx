// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios"; 
// import Logo from "../../assets/img/logos/logo.png";
// import { Link } from "react-router-dom";
// import { Row, Col } from "react-bootstrap";
// import { toast } from "sonner";

// const PasswordRecovery = () => {
//   const [loading, setLoading] = useState(false);
//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email("Invalid email address")
//       .required("Email is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values) => {
//       setLoading(true);
//       try {
//         const response = await axios.post(
//           `${process.env.REACT_APP_API_URL_FORGOT_PASS}`,
//           values
//         );
//         console.log("Form Submitted", response.data);
//         toast.success("Your pasword is...");
//       } catch (error) {
//         toast.error("Your password is invalid", { error });
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <div>
//       <div className="contact-form">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="login-inner-form">
//                 <div className="details">
//                   <a href="index.html">
//                     <img src={Logo} alt="logo" />
//                   </a>
//                   <h3>Recover your password</h3>
//                   <form onSubmit={formik.handleSubmit}>
//                     <div className="form-group">
//                       <input
//                         type="email"
//                         name="email"
//                         className="input-text"
//                         placeholder="Email Address"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         value={formik.values.email}
//                       />
//                       {formik.touched.email && formik.errors.email ? (
//                         <div className="error">{formik.errors.email}</div>
//                       ) : null}
//                     </div>
//                     <div className="form-group mb-0">
//                       <Row className="justify-content-center">
//                         <Col xs="auto">
//                           <button
//                             type="submit"
//                             className="btn-md button-theme btn-block"
//                             disabled={loading}
//                           >
//                             {loading ? "Sending..." : "Send your email"}
//                           </button>
//                         </Col>
//                       </Row>
//                     </div>
//                   </form>
//                   <ul className="social-list clearfix  ">
//                     <li className="mx-2">
//                       <a
//                         href="https://www.instagram.com/codeanew/"
//                         className="facebook-bg"
//                       >
//                         <i className="fa fa-instagram"></i>
//                       </a>
//                     </li>

//                     <li className="mx-2">
//                       <a
//                         href="https://www.linkedin.com/company/codeanew/about/"
//                         className="linkedin-bg"
//                       >
//                         <i className="fa fa-linkedin"></i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="footer">
//                   <span>
//                     Already a member? <Link to="/signIn"> Sign In</Link>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Export the PasswordRecovery component
// export default PasswordRecovery;
