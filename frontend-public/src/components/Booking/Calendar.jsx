// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import moment from "moment-timezone";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { toast } from "sonner";
// import "react-calendar/dist/Calendar.css";
// import "./BookingCalendar.css";

// const BookingCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState("10:00 AM");
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
//   const serverTimeZone = "Europe/Dublin";

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     message: Yup.string().required("Please describe your needs"),
//   });

//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     const fullDateTime =
//       moment(selectedDate).format("YYYY-MM-DD") + " " + selectedTime;
//     const convertedTime = moment
//       .tz(fullDateTime, userTimeZone)
//       .tz(serverTimeZone);

//     const bookingData = {
//       name: values.name,
//       email: values.email,
//       message: values.message,
//       date: convertedTime.format(),
//       timeZone: userTimeZone,
//     };

//     try {
//       const response = await axios.post(
//         `${process.env.REACT_APP_API_BOOKING}`,
//         bookingData
//       );
//       if (response.status === 200) {
//         toast.success("Booking successful!");
//         setIsModalOpen(false);
//         resetForm();
//       }
//     } catch (error) {
//       toast.error("Error saving booking.");
//       console.error("Error saving booking:", error);
//     }
//     setSubmitting(false);
//   };

//   return (
//     <div className="container my-5">
//       {/* <ToastContainer /> */}

//       <Card className="p-4 shadow-sm booking-card">
//         <Row className="align-items-center justify-content-center">
//           {/* Content of the booking card */}
//           <Col md={4} sm={12} className="mb-4 mb-md-0">
//             <div className="d-flex flex-column h-100 justify-content-between">
//               <p style={{ fontWeight: "600" }}>Dev Centre House Ireland</p>
//               <h3 className="mb-4 font-weight-bold">
//                 30-minute Session with a Senior Engineer
//               </h3>
//               <div className="d-flex flex-row">
//                 <span
//                   className="material-symbols-outlined"
//                   style={{ marginRight: "2px" }}
//                 >
//                   pace
//                 </span>
//                 <p style={{ fontWeight: "bold" }}>30 min</p>
//               </div>
//               <div className="d-flex flex-row">
//                 <span
//                   className="material-symbols-outlined"
//                   style={{ marginRight: "2px" }}
//                 >
//                   videocam
//                 </span>
//                 <p style={{ fontWeight: "bold" }}>
//                   Web conferencing details provided upon confirmation.
//                 </p>
//               </div>
//               <p style={{ fontWeight: "bold" }}>
//                 In this session, a Senior Software Engineer will join to provide
//                 valuable insights and answer any technical questions you may
//                 have.
//               </p>
//             </div>
//           </Col>

//           <Col md={4} sm={12} className="mb-4 mb-md-0">
//             <h4 className="mb-4">Select a Date & Time</h4>
//             <Calendar
//               onChange={setSelectedDate}
//               value={selectedDate}
//               className="custom-calendar"
//             />
//           </Col>

//           <Col md={3} sm={12}>
//             <div className="d-flex flex-column h-100 justify-content-between">
//               <h4 className="mb-4">Available Time Slots</h4>
//               <div className="d-flex flex-column gap-3">
//                 {["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"].map(
//                   (time, index) => (
//                     <Button
//                       key={index}
//                       variant={
//                         selectedTime === time ? "primary" : "outline-primary"
//                       }
//                       onClick={() => setSelectedTime(time)}
//                       className={`time-slot-button ${
//                         selectedTime === time ? "active" : ""
//                       }`}
//                     >
//                       {time}
//                     </Button>
//                   )
//                 )}
//               </div>
//               <p className="mt-4">Your time zone: {userTimeZone}</p>
//             </div>
//           </Col>
//         </Row>
//       </Card>

//       <div className="d-flex justify-content-center">
//         <Button
//           variant="primary"
//           className="mt-4"
//           onClick={() => setIsModalOpen(true)}
//         >
//           Book {selectedDate.toDateString()} at {selectedTime}
//         </Button>
//       </div>

//       <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Complete Your Booking</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Formik
//             initialValues={{ name: "", email: "", message: "" }}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form>
//                 <div className="form-group">
//                   <label htmlFor="name">Name</label>
//                   <Field type="text" name="name" className="form-control" />
//                   <ErrorMessage
//                     name="name"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>

//                 <div className="form-group mt-3">
//                   <label htmlFor="email">Email</label>
//                   <Field type="email" name="email" className="form-control" />
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>

//                 <div className="form-group mt-3">
//                   <label htmlFor="message">
//                     Briefly describe your software development needs
//                   </label>
//                   <Field
//                     as="textarea"
//                     rows={3}
//                     name="message"
//                     className="form-control"
//                   />
//                   <ErrorMessage
//                     name="message"
//                     component="div"
//                     className="text-danger"
//                   />
//                 </div>

//                 <Button
//                   variant="primary"
//                   type="submit"
//                   className="mt-4 w-100"
//                   disabled={isSubmitting}
//                 >
//                   Submit Booking
//                 </Button>
//               </Form>
//             )}
//           </Formik>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };

// export default BookingCalendar;




import React from "react";
import { InlineWidget } from "react-calendly";




const Calendar = () => {
  return (
    <div className="App">
      <InlineWidget url="https://calendly.com/mmm-emad64/30min" />
    </div>
  );
}

export default Calendar