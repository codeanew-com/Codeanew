import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Image from "../../assets/img/logos/logo.png";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavDash from "../Dashoard/NavDash";

const validationSchema = Yup.object({
  fullname: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
});

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: { fullname: "", email: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await axios.post(`${process.env.REACT_APP_API_URL_SIGNUP}`, values);
        toast.success("Signup successful!");
        formik.resetForm();
      } catch (error) {
        toast.error("There was an error submitting the form. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div>
      <NavDash />

      <div className="min-h-screen flex items-center justify-center bg-bg-light py-24 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="px-10 pt-10 pb-8">
              <a href="/" className="block mb-6 w-fit mx-auto">
                <img src={Image} alt="Codeanew" className="h-7 mx-auto" />
              </a>

              <h3 className="text-xl font-bold text-heading text-center mb-8">
                Create an account
              </h3>

              <form onSubmit={formik.handleSubmit} noValidate className="space-y-5">
                <div>
                  <input
                    type="text"
                    name="fullname"
                    className="form-input"
                    placeholder="Full Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullname}
                  />
                  {formik.touched.fullname && formik.errors.fullname && (
                    <p className="text-red-500 text-xs mt-1 mb-0">{formik.errors.fullname}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Email Address"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-xs mt-1 mb-0">{formik.errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    name="password"
                    className="form-input"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500 text-xs mt-1 mb-0">{formik.errors.password}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn-theme w-full py-3.5"
                  disabled={loading}
                >
                  {loading ? "Submitting…" : "Sign Up"}
                </button>
              </form>
            </div>

            <div className="border-t border-gray-100 px-10 py-5 flex flex-col items-center gap-3 bg-gray-50">
              <p className="text-xs text-subtle m-0">Follow us</p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/codeanew/"
                  target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center text-white text-lg rounded-lg transition-all hover:scale-105 facebook-bg"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.linkedin.com/company/codeanew/about/"
                  target="_blank" rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center text-white text-lg rounded-lg transition-all hover:scale-105 linkedin-bg"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
