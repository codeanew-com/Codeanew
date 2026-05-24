import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const ErrPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-bg-light px-4">
    <div className="text-center max-w-lg">
      {/* Icon */}
      <div className="w-24 h-24 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-8">
        <FontAwesomeIcon icon={faExclamationTriangle} className="text-gold text-4xl" />
      </div>

      {/* 404 */}
      <h1 className="text-[7rem] leading-none font-black text-gray-100 select-none -mt-2">404</h1>

      <h2 className="text-2xl font-bold text-heading -mt-4 mb-4">Page Not Found</h2>
      <p className="text-muted leading-relaxed mb-10 text-base">
        Sorry, we can't seem to find the page you were looking for.
        Let's help you get back on track!
      </p>

      <Link
        to="/"
        className="btn-theme inline-flex px-10 py-3.5 text-base"
      >
        Back to Home
      </Link>
    </div>
  </div>
);

export default ErrPage;
