import React, { useState } from "react";
import NavDash from "../NavDash";
import { Link } from "react-router-dom";
import SubBannerBg from "../../../assets/img/img-5.png";
import { data } from "./data";

const ROWS_PER_PAGE = 10;

const BookingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages   = Math.ceil(data.length / ROWS_PER_PAGE);
  const startIndex   = (currentPage - 1) * ROWS_PER_PAGE;
  const currentRows  = data.slice(startIndex, startIndex + ROWS_PER_PAGE);

  return (
    <div className="min-h-screen bg-bg-light">
      <NavDash />

      {/* Sub Banner */}
      <div
        className="sub-banner"
        style={{ backgroundImage: `url(${SubBannerBg})` }}
      >
        <div className="sub-banner-content">
          <h1>All Bookings</h1>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li className="active">All Bookings</li>
          </ul>
        </div>
      </div>

      {/* Table */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((row, i) => (
                    <tr key={i}>
                      <td className="font-medium">{row.name}</td>
                      <td>{row.email}</td>
                      <td>{row.date}</td>
                      <td>{row.time}</td>
                      <td className="text-sm text-muted max-w-xs truncate">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 py-5 border-t border-gray-100">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="btn-theme px-6 py-2 text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
              >
                ← Previous
              </button>
              <span className="text-sm text-muted font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="btn-theme px-6 py-2 text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
