// // import React, { useState, useEffect } from 'react';
// // import Button from 'react-bootstrap/Button';
// // import Modal from 'react-bootstrap/Modal';
// // import './CustomModal.css'; // Import the custom CSS
// // import Calendar from './Calendar';
// // import { Link } from 'react-router-dom';
// // import Navbar from '../Navbar';
// // import useAdjustHeader from '../../hooks/useAdjustHeader';
// // import AboutImage from "../../assets/img/abut.jpg";
// // import Footer from '../Footer';
// // import { getCalApi } from "@calcom/embed-react";

// // function Example() {
// //   useAdjustHeader();
// //   const [show, setShow] = useState(false);

// //   return (
// //     <>
// //       <Navbar />

// //       <div className="sub-banner overview-bgi">
// //         <div className="container">
// //           <div className="breadcrumb-area">
// //             <h1>Book a call</h1>
// //             <ul className="breadcrumbs">
// //               <li><Link to='/'> Home</Link></li>
// //               <li className="active">book a call</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //       <div>



// //         <div className="about-listing content-area-2">
// //           <div className="container">
// //             <div className="row">
// //               <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
// //                 <div className="about-slider-box simple-slider">
// //                   <img className="d-block w-100" src={AboutImage} alt="About Us" />
// //                 </div>
// //               </div>
// //               <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12 align-self-center">
// //                 <div className="about-text">
// //                   <h3>book a call</h3>
// //                   <p>
// //                     Codeanew Technologies, situated in UAE, offers high-quality web development, mobile app production, cloud services, DevOps, and business email solutions. Our objective is to provide specialized, innovative solutions that help your organization grow. With a competent workforce and a focus on individual service, we solve challenging challenges and produce extraordinary outcomes. Collaborate with us to translate your digital requirements into effective solutions.
// //                   </p>
// //                   <Button variant="primary" onClick={() => setShow(true)}>
// //                     Book a call
// //                   </Button>

// //                   <Modal
// //                     show={show}
// //                     onHide={() => setShow(false)}
// //                     dialogClassName="modal-fullwidth" // Apply the custom class
// //                     aria-labelledby="example-custom-modal-styling-title"
// //                   >
// //                     <Modal.Header closeButton>
// //                     </Modal.Header>
// //                     <Modal.Body>
// //                       <Calendar />
// //                     </Modal.Body>
// //                   </Modal>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }

// // export default Example;







// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import './CustomModal.css';
// import Calendar from './Calendar';
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar';
// import useAdjustHeader from '../../hooks/useAdjustHeader';
// import AboutImage from "../../assets/img/abut.jpg";
// import Footer from '../Footer';
// import { getCalApi } from "@calcom/embed-react";




// function Example() {
//   useAdjustHeader();
//   const [show, setShow] = useState(false);



//   useEffect(() => {
//     (async function () {
//       const cal = await getCalApi({ "namespace": "30min" });
//       cal("ui", { "styles": { "branding": { "brandColor": "#0064ff" } }, "hideEventTypeDetails": false, "layout": "month_view" });
//     })();
//   }, [])
//   return (
//     <>
//       <Navbar />

//       <div className="sub-banner overview-bgi">
//         <div className="container">
//           <div className="breadcrumb-area">
//             <h1>Book a call</h1>
//             <ul className="breadcrumbs">
//               <li><Link to='/'> Home</Link></li>
//               <li className="active">book a call</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div>



//         <div className="about-listing content-area-2">
//           <div className="container">
//             <div className="row">
//               <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
//                 <div className="about-slider-box simple-slider">
//                   <img className="d-block w-100" src={AboutImage} alt="About Us" />
//                 </div>
//               </div>
//               <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12 align-self-center">
//                 <div className="about-text">
//                   <h3>book a call</h3>
//                   <p>
//                     Codeanew Technologies, situated in UAE, offers high-quality web development, mobile app production, cloud services, DevOps, and business email solutions. Our objective is to provide specialized, innovative solutions that help your organization grow. With a competent workforce and a focus on individual service, we solve challenging challenges and produce extraordinary outcomes. Collaborate with us to translate your digital requirements into effective solutions.
//                   </p>


//                   <Button
//                     data-cal-namespace="30min"
//                     variant="primary"
//                     data-cal-link="mohamed-emad-hs8u0e/30min"
//                     data-cal-config='{"layout":"month_view","theme":"auto"}'
//                   >Book a call</Button>
//                   {/* <Button variant="primary" onClick={() => setShow(true)}>
//                     Book a call
//                   </Button>

//                   <Modal
//                     show={show}
//                     onHide={() => setShow(false)}
//                     // dialogClassName="modal-fullwidth"

//                     aria-labelledby="example-custom-modal-styling-title"
//                   >
//                     <Modal.Header closeButton>
//                     </Modal.Header>
//                     <Modal.Body style={{
//                       height: '85vh'
//                     }}>
//                       <Calendar />
//                     </Modal.Body>
//                   </Modal> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Example;







import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './CustomModal.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import useAdjustHeader from '../../hooks/useAdjustHeader';
import AboutImage from "../../assets/img/abut.jpg";
import Footer from '../Footer';
import { getCalApi } from "@calcom/embed-react";

function Example() {
  useAdjustHeader();
  const [show, setShow] = useState(false);
  const [bookingData, setBookingData] = useState(null); // State to store booking info

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", {
        "styles": {
          "branding": { "brandColor": "#0064ff" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });

      // Capture booking data and set it to state
      cal("onEventBooked", (eventData) => {
        console.log("Event booked: ", eventData); // You can inspect eventData structure
        setBookingData(eventData); // Set the booking data to state
        sendBookingDataToBackend(eventData); // Trigger the backend call
      });
    })();
  }, []);

  // Function to send POST request to backend using axios
  const sendBookingDataToBackend = async (data) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BOOKING}`, data, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log("Booking successfully sent to backend:", response.data);
    } catch (error) {
      console.error("There was an error sending the booking data to the backend:", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="sub-banner overview-bgi">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>Book a call</h1>
            <ul className="breadcrumbs">
              <li><Link to='/'> Home</Link></li>
              <li className="active">book a call</li>
            </ul>
          </div>
        </div>
      </div>
      <div>

        <div className="about-listing content-area-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="about-slider-box simple-slider">
                  <img className="d-block w-100" src={AboutImage} alt="About Us" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12 align-self-center">
                <div className="about-text">
                  <h3>book a call</h3>
                  <p>
                    Codeanew Technologies, situated in UAE, offers high-quality web development, mobile app production, cloud services, DevOps, and business email solutions. Our objective is to provide specialized, innovative solutions that help your organization grow. With a competent workforce and a focus on individual service, we solve challenging challenges and produce extraordinary outcomes. Collaborate with us to translate your digital requirements into effective solutions.
                  </p>

                  <Button
                    data-cal-namespace="30min"
                    variant="primary"
                    style={{ backgroundColor: " #e4ad35", border: 'none' }}
                    data-cal-link="mohamed-emad-hs8u0e/30min"
                    data-cal-config='{"layout":"month_view","theme":"auto"}'
                  >Book a call</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Example;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import './CustomModal.css';
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar';
// import useAdjustHeader from '../../hooks/useAdjustHeader';
// import AboutImage from "../../assets/img/abut.jpg";
// import Footer from '../Footer';
// import { getCalApi } from "@calcom/embed-react";

// function Example() {
//   useAdjustHeader();
//   const [bookingData, setBookingData] = useState(null); // State to store booking info

//   useEffect(() => {
//     (async function () {
//       const cal = await getCalApi({ "namespace": "30min" });
//       cal("ui", {
//         "styles": {
//           "branding": { "brandColor": "#0064ff" }
//         },
//         "hideEventTypeDetails": false,
//         "layout": "month_view"
//       });

//       // Capture booking data and set it to state
//       cal("onEventBooked", (eventData) => {
//         console.log("Event booked: ", eventData); // You can inspect eventData structure
//         setBookingData(eventData); // Set the booking data to state
//         sendBookingDataToBackend(eventData); // Trigger the backend call
//       });
//     })();
//   }, []);

//   // Function to send POST request to backend using axios
//   const sendBookingDataToBackend = async (data) => {
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_BOOKING}`, data, {
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${process.env.REACT_APP_CAL_API_KEY}` // Use API Key securely
//         }
//       });

//       console.log("Booking successfully sent to backend:", response.data);
//     } catch (error) {
//       console.error("There was an error sending the booking data to the backend:", error);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="sub-banner overview-bgi">
//         <div className="container">
//           <div className="breadcrumb-area">
//             <h1>Book a call</h1>
//             <ul className="breadcrumbs">
//               <li><Link to='/'> Home</Link></li>
//               <li className="active">book a call</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div>

//         <div className="about-listing content-area-2">
//           <div className="container">
//             <div className="row">
//               <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
//                 <div className="about-slider-box simple-slider">
//                   <img className="d-block w-100" src={AboutImage} alt="About Us" />
//                 </div>
//               </div>
//               <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12 align-self-center">
//                 <div className="about-text">
//                   <h3>book a call</h3>
//                   <p>
//                     Codeanew Technologies, situated in UAE, offers high-quality web development, mobile app production, cloud services, DevOps, and business email solutions. Our objective is to provide specialized, innovative solutions that help your organization grow. With a competent workforce and a focus on individual service, we solve challenging challenges and produce extraordinary outcomes. Collaborate with us to translate your digital requirements into effective solutions.
//                   </p>

//                   <Button
//                     data-cal-namespace="30min"
//                     variant="primary"
//                     data-cal-link="mohamed-emad-hs8u0e/30min"
//                     data-cal-config='{"layout":"month_view","theme":"auto"}'
//                   >Book a call</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Example;








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import './CustomModal.css';
// import { Link } from 'react-router-dom';
// import Navbar from '../Navbar';
// import useAdjustHeader from '../../hooks/useAdjustHeader';
// import AboutImage from "../../assets/img/abut.jpg";
// import Footer from '../Footer';
// import { getCalApi } from "@calcom/embed-react";

// function Example() {
//   useAdjustHeader();
//   const [bookingData, setBookingData] = useState(null); // State to store booking info

//   useEffect(() => {
//     (async function () {
//       const cal = await getCalApi({ "namespace": "30min" });
//       cal("ui", {
//         "styles": {
//           "branding": { "brandColor": "#0064ff" }
//         },
//         "hideEventTypeDetails": false,
//         "layout": "month_view"
//       });

//       // Capture booking data and set it to state
//       cal("onEventBooked", (eventData) => {
//         console.log("Event booked: ", eventData); // You can inspect eventData structure
//         setBookingData(eventData); // Set the booking data to state
//         sendBookingDataToBackend(eventData); // Trigger the backend call
//       });
//     })();
//   }, []);

//   // Function to send POST request to backend using axios
//   const sendBookingDataToBackend = async (data) => {
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_BOOKING}`, data, {
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${process.env.REACT_APP_CAL_API_KEY}` // Use API Key securely
//         }
//       });

//       console.log("Booking successfully sent to backend:", response.data);
//     } catch (error) {
//       console.error("There was an error sending the booking data to the backend:", error);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="sub-banner overview-bgi">
//         <div className="container">
//           <div className="breadcrumb-area">
//             <h1>Book a call</h1>
//             <ul className="breadcrumbs">
//               <li><Link to='/'> Home</Link></li>
//               <li className="active">book a call</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div>

//         <div className="about-listing content-area-2">
//           <div className="container">
//             <div className="row">
//               <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-xs-12">
//                 <div className="about-slider-box simple-slider">
//                   <img className="d-block w-100" src={AboutImage} alt="About Us" />
//                 </div>
//               </div>
//               <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-xs-12 align-self-center">
//                 <div className="about-text">
//                   <h3>book a call</h3>
//                   <p>
//                     Codeanew Technologies, situated in UAE, offers high-quality web development, mobile app production, cloud services, DevOps, and business email solutions. Our objective is to provide specialized, innovative solutions that help your organization grow. With a competent workforce and a focus on individual service, we solve challenging challenges and produce extraordinary outcomes. Collaborate with us to translate your digital requirements into effective solutions.
//                   </p>

//                   <Button
//                     data-cal-namespace="30min"
//                     variant="primary"
//                     data-cal-link="mohamed-emad-hs8u0e/30min"
//                     data-cal-config='{"layout":"month_view","theme":"auto"}'
//                   >Book a call</Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Example;
