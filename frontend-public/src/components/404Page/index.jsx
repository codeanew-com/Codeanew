import React from 'react'
import { Link } from "react-router-dom";
const index = () => {
    
    return (
        <>
            {/* <div className="page_loader"></div> */}
            <div className="pages-404">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pages-404-inner">
                                <h1>Page Not Found</h1>
                                <p>Sorry, we can’t seem to find the page you were looking for. Let's help you get back on track!</p>
                                <Link to="/" className="btn border-thn btn-md">Back to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default index