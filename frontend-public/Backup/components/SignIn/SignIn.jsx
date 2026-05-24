import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import logoImage from "../../assets/img/logos/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
});

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "", rememberMe: false },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL_LOGIN}`, values);
        const { token } = response.data;
        Cookies.set("authToken", token, { expires: 1 });
        toast.success("Logged in successfully!");
        navigate("/dashboard");
      } catch (error) {
        const msg = error.response?.data?.message || "Sign in failed. Please try again.";
        toast.error(msg);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-light py-12 px-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          <div className="px-10 pt-10 pb-8">
            {/* Logo */}
            <Link to="/" className="block mb-6 w-fit mx-auto">
              <img src={logoImage} alt="Codeanew" className="h-7 mx-auto" />
            </Link>

            <h3 className="text-xl font-bold text-heading text-center mb-8">
              Sign into your account
            </h3>

            <form onSubmit={formik.handleSubmit} noValidate className="space-y-5">
              {/* Email */}
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

              {/* Password */}
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

              {/* Remember me */}
              <label className="flex items-center gap-2.5 cursor-pointer w-fit">
                <input
                  type="checkbox"
                  name="rememberMe"
                  id="rememberMe"
                  className="w-4 h-4 accent-gold rounded border-gray-300"
                  onChange={formik.handleChange}
                  checked={formik.values.rememberMe}
                />
                <span className="text-sm text-muted select-none">Remember me</span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="btn-theme w-full py-3.5"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Signing in…
                  </>
                ) : "Sign In"}
              </button>
            </form>
          </div>

          {/* Social footer */}
          <div className="border-t border-gray-100 px-10 py-5 flex flex-col items-center gap-3 bg-gray-50">
            <p className="text-xs text-subtle m-0">Follow us</p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/codeanew/"
                target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center text-white text-lg rounded-lg transition-all hover:scale-105 hover:shadow-md facebook-bg"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/company/codeanew/about/"
                target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center text-white text-lg rounded-lg transition-all hover:scale-105 hover:shadow-md linkedin-bg"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
