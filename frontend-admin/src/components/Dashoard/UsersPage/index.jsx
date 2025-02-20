import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios';
import NavDash from '../NavDash';
import Footer from "../../Footer"
import Loading from '../../Loading';

const UsersPage = () => {
    const { token } = useContext(AuthContext); // Get token from AuthContext
    const [users, setUsers] = useState([]); // Initialize users as an array
    const [loading, setLoading] = useState(false); // State for loading
    const [error, setError] = useState(null); // State for error handling
    const [currentPage, setCurrentPage] = useState(1); // State for pagination
    const rowsPerPage = 5; // Rows per page

    // Calculate pagination indices
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;

    // Calculate total pages
    const totalPages = Math.ceil(users.length / rowsPerPage);

    // Fetch users from API
    useEffect(() => {
        if (token) {
            setLoading(true);
            setError(null); // Clear any previous errors
            axios
                .get(`${process.env.REACT_APP_ALL_USERS}`, {
                    headers: {
                        // Authorization: `Bearer ${token}`,
                        'x-access-token': token, // Note: Header keys should be strings
                    },
                })
                .then((response) => {
                    // Extract 'meta' array from response and set it as users
                    const { meta } = response.data;
                    if (Array.isArray(meta)) {
                        setUsers(meta); // Set users from the 'meta' array
                    } else {
                        setError('Unexpected response format');
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching users:', error);
                    setError('Failed to fetch users. Please try again later.');
                    setLoading(false);
                });
        } else {
            setError('Token not available, please log in.');
        }
    }, [token]);

    // Helper function to format the createdAt date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Get the current rows for the current page
    const currentRows = users
        .slice() // Create a shallow copy to avoid mutating the state
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by createdAt descending
        .slice(indexOfFirstRow, indexOfLastRow); // Paginate

    // Handle pagination: next page
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    // Handle pagination: previous page
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
                            <h1>All Users</h1>
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
                                    <th>Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentRows.length > 0 ? (
                                    currentRows.map((row) => (
                                        <tr key={row._id}>
                                            <td>{row.fullname || row.name}</td> {/* Use fullname or name */}
                                            <td>{row.email}</td>
                                            <td>{formatDate(row.createdAt)}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3">No users available</td>
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

export default UsersPage;
