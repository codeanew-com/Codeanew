

import { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import "../assets/css/forHooks/style_scrollhook.css";
import { Link } from "react-router-dom";

const usePopUpToScroll = () => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  const hasShown = useRef(false); // Track if the popup has been shown

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasShown.current) {
          handleShow();
          hasShown.current = true; // Mark as shown
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  const ModalComponent = () => (
    <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
      <Modal.Header closeButton />
      <Modal.Body>
        <div>
          <Link to="/contactUs" className="centered-button">
            Contact Us
          </Link>
        </div>
        <div style={{marginTop: '20px', alignItems: 'center', justifyContent: 'center'}}>
          <h5>Reach out to us for more information 👋.</h5>
        </div>
      </Modal.Body>
      {/* <Modal.Footer></Modal.Footer> */}
    </Modal>
  );

  return { ref, ModalComponent };
};

export default usePopUpToScroll;
