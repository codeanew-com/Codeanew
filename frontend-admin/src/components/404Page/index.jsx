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
                                <h1>Oops... You got lost.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse non earum consectetur, ratione.</p>
                                <Link to="/" className="btn border-thn btn-md">Home Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default index