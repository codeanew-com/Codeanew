import React from 'react'
import Blog1 from "../../assets/img/blog/img.png";
import Blog2 from "../../assets/img/blog/img-2.png";
import Blog3 from "../../assets/img/blog/img-3.png";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import Categories from '../Categores';
import useAdjustHeader from '../../hooks/useAdjustHeader';

const Blogs = () => {
  useAdjustHeader();
  return (
    
    <>
    <Navbar />


      <div className="sub-banner overview-bgi">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>Blogs</h1>
            <ul className="breadcrumbs">
              <li><Link to='/'> Home</Link></li>
              <li className="active">blogs</li>
            </ul>
          </div>
        </div>
      </div>


      <Categories />


      <div className="blog-section content-area" id="blog">
        <div className="container">
          <div className="main-title">
            <h1>Blog List</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog">
                <div className="blog-photo">
                  <img src={Blog1} alt="blog" className="img-fluid" />
                  <div className="date-box">
                    <span>27</span>Feb
                  </div>
                  <div className="post-meta clearfix">
                    <span><a href="#"><i className="flaticon-male"></i></a>Admin</span>
                    <span><a href="#"><i className="flaticon-heart"></i></a>17K</span>
                    <span><a href="#"><i className="flaticon-comment"></i></a>73k</span>
                  </div>
                </div>
                <div className="detail">
                  <h3>
                    <a href="blog-details.html">Entrepreneurs and small owners you get net.</a>
                  </h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog">
                <div className="blog-photo">
                  <img src={Blog2} alt="blog" className="img-fluid" />
                  <div className="date-box">
                    <span>27</span>Feb
                  </div>
                  <div className="post-meta clearfix">
                    <span><a href="#"><i className="flaticon-male"></i></a>Admin</span>
                    <span><a href="#"><i className="flaticon-heart"></i></a>17K</span>
                    <span><a href="#"><i className="flaticon-comment"></i></a>73k</span>
                  </div>
                </div>
                <div className="detail">
                  <h3>
                    <a href="blog-details.html">Technology trends, industry influencers hand</a>
                  </h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 none-992">
              <div className="blog">
                <div className="blog-photo">
                  <img src={Blog3} alt="blog" className="img-fluid" />
                  <div className="date-box">
                    <span>27</span>Feb
                  </div>
                  <div className="post-meta clearfix">
                    <span><a href="#"><i className="flaticon-male"></i></a>Admin</span>
                    <span><a href="#"><i className="flaticon-heart"></i></a>17K</span>
                    <span><a href="#"><i className="flaticon-comment"></i></a>73k</span>
                  </div>
                </div>
                <div className="detail">
                  <h3>
                    <a href="blog-details.html">Incredibly visually appealing, it's also mentally appealing</a>
                  </h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blogs