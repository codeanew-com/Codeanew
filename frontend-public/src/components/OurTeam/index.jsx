import React from 'react'
import Avatar1 from "../../assets/img/team/1.webp"
import Avatar2 from "../../assets/img/team/2.webp"
import Avatar3 from "../../assets/img/team/3 (1).webp"
import Avatar4 from "../../assets/img/team/4 (1).webp"
const OurTeam = () => {
  return (
    <>
      <div className="our-team content-area" id="team">
        <div className="container">
          
          <div className="main-title text-center">
            <h1>Our Team</h1>
            <p>Meet the experts behind our success.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="team-1">
                <div className="team-photo">
                  <a href="#">
                    <img src={Avatar1} alt="agent-2" className="img-fluid" />
                  </a>
                  <div className="social-list">
                    <ul>
                      <li><a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#" className="google-bg"><i className="fa fa-google"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-details">
                  <h5><a href="#">Khalid</a></h5>
                  <p>Business Maneger, </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="team-1">
                <div className="team-photo">
                  <a href="#">
                    <img src={Avatar2} alt="agent-2" className="img-fluid" />
                  </a>
                  <div className="social-list">
                    <ul>
                      <li><a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#" className="google-bg"><i className="fa fa-google"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-details">
                  <h5><a href="#">Abdul Rahman</a></h5>
                  <p>Sales Manager</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="team-1">
                <div className="team-photo">
                  <a href="#">
                    <img src={Avatar3} alt="agent-2" className="img-fluid" />
                  </a>
                  <div className="social-list">
                    <ul>
                      <li><a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#" className="google-bg"><i className="fa fa-google"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-details">
                  <h5><a href="#">Mohammed</a></h5>
                  <p>IT Manager</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="team-1">
                <div className="team-photo">
                  <a href="#">
                    <img src={Avatar4} alt="agent-2" className="img-fluid" />
                  </a>
                  <div className="social-list">
                    <ul>
                      <li><a href="#" className="facebook-bg"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#" className="twitter-bg"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#" className="google-bg"><i className="fa fa-google"></i></a></li>
                    </ul>
                  </div>
                </div>
                <div className="team-details">
                  <h5><a href="#">Walid</a></h5>
                  <p>Business Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default OurTeam