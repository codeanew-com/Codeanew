

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from "../../Footer"
import Loading from '../../Loading';

const ContactPag = () => {
  const { token } = useContext(AuthContext); // Get token from AuthContext
  const [contacts, setContacts] = useState([]); // State for contacts
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(null); // State for error handling
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const rowsPerPage = 5; // Rows per page

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  // Reverse and slice the contacts to show the most recent first
  const currentRows = contacts
    .slice() // Create a shallow copy to avoid mutating the state
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by createdAt descending
    .slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(contacts.length / rowsPerPage);

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

  useEffect(() => {
    if (token) {
      setLoading(true);
      setError(null); // Clear any previous errors
      axios
        .get(`${process.env.REACT_APP_ALL_CONTACTS}`, {
          headers: {
            // Authorization: `Bearer ${token}`,
            'x-access-token': token
          },
        })
        .then((response) => {
          console.log('API Response:', response.data);
          const contactsData = Array.isArray(response.data.data) ? response.data.data : [];
          setContacts(contactsData);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching contacts:', error);
          setError('Failed to fetch contacts. Please try again later.');
          setLoading(false);
        });
    } else {
      setError('Token not available, please log in.');
    }
  }, [token]);

  // Helper function to format the updatedAt date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div>
        {/* <NavDash /> */}
        <div className="sub-banner overview-bgi">
          <div className="container">
            <div className="breadcrumb-area">
              <h1>All Contacts</h1>
              {/* <ul className="breadcrumbs">
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li className="active">All Contacts</li>
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
            <p>{error}</p>
          ) : (
            <table className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Updated At</th> {/* New column for Updated At */}
                </tr>
              </thead>
              <tbody>
                {currentRows.length > 0 ? (
                  currentRows.map((row) => (
                    <tr key={row._id}>
                      <td>{row.properties.fullname}</td>
                      <td>{row.properties.email}</td>
                      <td>{row.properties.phone || 'N/A'}</td>
                      <td>{row.properties.service.join(', ') || 'N/A'}</td>
                      <td>{formatDate(row.updatedAt)}</td> {/* Display formatted updatedAt */}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No contacts available</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}

          <div className="pagination-controls d-flex justify-content-center">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="btn btn-primary mx-2"
              style={{ background: "linear-gradient(140deg, #e4ad35, #f1cf2e)", border: 'none' }}
            >
              Previous
            </button>
            <span className="align-self-center mx-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="btn btn-primary mx-2"
              style={{ background: "linear-gradient(140deg, #e4ad35, #f1cf2e)", border: 'none' }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPag;
