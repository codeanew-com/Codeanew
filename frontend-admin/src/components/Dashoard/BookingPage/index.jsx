import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from '../../../context/AuthContext';
import NavDash from "../NavDash";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import axios from 'axios';
import Footer from "../../Footer";
import Loading from "../../Loading";
const BookingPage = () => {
  const { token } = useContext(AuthContext); // Get token from AuthContext
  const [bookings, setBookings] = useState([]); // State for bookings
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(null); // State for error handling
  const rowsPerPage = 5;


  console.log(token);

  // Fetch bookings from API when the component mounts
  useEffect(() => {
    if (token) {
      setLoading(true);
      setError(null); // Clear any previous errors

      // axios.get(`${process.env.REACT_APP_ALL_BOOKINGS}`, {
      //   headers: {
      //     x-access-token: `${token}`,
      //   }
      // })
      //   .then(response => {
      //     console.log("API Response:", response.data);
      //     const bookingsData = Array.isArray(response.data.data) ? response.data.data : [];
      //     setBookings(bookingsData.reverse()); // Reverse the order of bookings here
      //     setLoading(false);
      //   })
      //   .catch(error => {
      //     console.error("Error fetching bookings:", error.message);
      //     setError("Failed to fetch bookings. Please try again later.");
      //     setLoading(false);
      //   });

      axios.get(`${process.env.REACT_APP_ALL_BOOKINGS}`, {
        headers: {
          'x-access-token': token, // Note: Header keys should be strings
        },
      })
        .then(response => {
          console.log("API Response:", response.data);
          const bookingsData = Array.isArray(response.data.data) ? response.data.data : [];
          setBookings(bookingsData.reverse()); // Reverse the order of bookings here
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching bookings:", error);
          setError("Failed to fetch bookings. Please try again later.");
          setLoading(false);
        });
    } else {
      setError("Token not available, please log in.");
    }
  }, [token]);

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = bookings.slice(indexOfFirstRow, indexOfLastRow); // Safely slice the bookings

  const totalPages = Math.ceil(bookings.length / rowsPerPage);

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
    <>
      <div>
        <NavDash />

        <div className="sub-banner overview-bgi">
          <div className="container">
            <div className="breadcrumb-area">
              <h1>All Bookings</h1>
              {/* <ul className="breadcrumbs">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="active">All Bookings</li>
            </ul> */}
            </div>
          </div>
        </div>

        <div className="booking-table my-4">
          {loading ? (
            <div className="d-flex align-items-center justify-content-center">
              <Loading />
            </div>
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : bookings.length > 0 ? (
            <>
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
                      <td>{row.attendees?.[0]?.name || 'N/A'}</td> {/* Safely access attendees */}
                      <td>{row.attendees?.[0]?.email || 'N/A'}</td>
                      <td>{new Date(row.startTime).toLocaleDateString()}</td>
                      <td>{new Date(row.startTime).toLocaleTimeString()}</td>
                      <td>{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <div className="pagination-controls d-flex justify-content-center">
                <Button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="mx-2"
                  style={{ background: "linear-gradient(140deg, #e4ad35, #f1cf2e)", border: 'none' }}
                >
                  Previous
                </Button>

                <span className="align-self-center mx-2">
                  Page {currentPage} of {totalPages}
                </span>

                <Button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="mx-2"
                  style={{ background: "linear-gradient(140deg, #e4ad35, #f1cf2e)", border: 'none' }}
                >
                  Next
                </Button>
              </div>
            </>
          ) : (
            <p>No bookings available.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;
