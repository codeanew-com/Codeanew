import React, { useState } from "react";
import NavDash from "../NavDash";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { data } from "./data"; 

const BookingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <NavDash />

      <div className="sub-banner overview-bgi">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>All Booking</h1>
            <ul className="breadcrumbs">
              <li>
                <Link to="/dashboard"> Dashboard</Link>
              </li>
              <li className="active">All Booking</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="booking-table my-4">
        <Table striped bordered hover responsive>
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
            {currentRows.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.date}</td>
                <td>{row.time}</td>
                <td>{row.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="pagination-controls d-flex justify-content-center">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="btn btn-primary mx-2"
            style={{ backgroundColor: "#f1cf2e", border: 'none' }} 
          >
            Previous
          </button>

          <span className="align-self-center mx-2">
            {" "}
            Page {currentPage} of {totalPages}{" "}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="btn btn-primary mx-2"
            style={{ backgroundColor: "#f1cf2e", border: 'none' }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
