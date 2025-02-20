import React from "react";
import "./style.css"; 
import Footer from "../Footer";
import {Link } from "react-router-dom";
import Navbar from "../Navbar/index";   

const TermsOfUse = () => {
  return (
    <>
      <Navbar />
      <div className="sub-banner overview-bgi">
        <div className="container">
          <div className="breadcrumb-area">
            <h1>Terms of Use</h1>
            <ul className="breadcrumbs">
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li className="active">Terms of Use</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="faq content-area-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Terms of Use</h1>
              <p>
                <strong>Last Updated: October 20, 2024</strong>
              </p>

              <p>
                Welcome to <strong>Codeaew</strong>!
              </p>

              <p>
                These Terms of Use ("Terms") govern your use of the software
                products, services, websites, and applications (collectively,
                the "Services") provided by <strong>Codeaew</strong> ("we",
                "our", or "us"). By accessing or using our Services, you agree
                to be bound by these Terms. If you do not agree to these Terms,
                please do not use our Services.
              </p>

              <h2>1. Acceptance of Terms</h2>
              <p>
                By using our Services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and our Privacy
                Policy. You must be at least 18 years of age or the legal age in
                your jurisdiction to use our Services.
              </p>

              <h2>2. Modifications to Terms</h2>
              <p>
                We reserve the right, at our discretion, to modify or update
                these Terms at any time. Any changes to the Terms will be posted
                on our website or made available through the Services. Your
                continued use of the Services following the posting of changes
                constitutes your acceptance of such changes.
              </p>

              <h2>3. License to Use Services</h2>
              <p>
                Subject to these Terms, we grant you a limited, non-exclusive,
                non-transferable, revocable license to use our software and
                Services solely for personal or internal business purposes. Any
                other use of our software and Services without our prior written
                consent is prohibited.
              </p>

              <h2>4. User Account</h2>
              <p>
                To access certain features of the Services, you may be required
                to create an account. You agree to provide accurate and complete
                information when creating your account and to keep your account
                information up-to-date. You are responsible for maintaining the
                confidentiality of your account credentials and for all
                activities that occur under your account.
              </p>

              <h2>5. Prohibited Conduct</h2>
              <p>
                When using our Services, you agree not to:
                <ul>
                  <li>
                    Use the Services for any illegal or unauthorized purpose.
                  </li>
                  <li>
                    Attempt to reverse-engineer, modify, or create derivative
                    works of our software.
                  </li>
                  <li>
                    Interfere with the proper functioning of our Services,
                    including by hacking, scraping, or exploiting bugs.
                  </li>
                  <li>
                    Use the Services in a manner that violates the rights of
                    others, including their intellectual property, privacy, or
                    personal rights.
                  </li>
                </ul>
              </p>

              <h2>6. Intellectual Property</h2>
              <p>
                All intellectual property rights in the Services, including but
                not limited to software, logos, trademarks, and content, are
                owned by or licensed to <strong>Codeaew</strong>. You may not
                reproduce, distribute, or create derivative works from any part
                of the Services without our prior written consent.
              </p>

              <h2>7. Privacy Policy</h2>
              <p>
                Your privacy is important to us. Please review our [Privacy
                Policy] to understand how we collect, use, and protect your
                personal information.
              </p>

              <h2>8. Fees and Payments</h2>
              <p>
                Certain features of our Services may require payment. You agree
                to pay all applicable fees in connection with your use of the
                Services. All payments are non-refundable unless otherwise
                specified.
              </p>

              <h2>9. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to the
                Services, without prior notice, if you violate these Terms or
                engage in conduct that we deem harmful to the Services or other
                users.
              </p>

              <h2>10. Disclaimer of Warranties</h2>
              <p>
                The Services are provided "AS IS" and "AS AVAILABLE" without
                warranties of any kind, either express or implied. We disclaim
                all warranties, including but not limited to warranties of
                merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>

              <h2>11. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, <strong>Codeaew</strong>{" "}
                shall not be liable for any indirect, incidental, special, or
                consequential damages arising out of or in connection with your
                use of the Services. Our total liability for any claim related
                to the Services shall not exceed the amount paid by you to use
                the Services in the previous 12 months.
              </p>

              <h2>12. Indemnification</h2>
              <p>
                You agree to indemnify and hold <strong>Codeaew</strong>{" "}
                harmless from any claims, damages, losses, liabilities, and
                expenses arising from your use of the Services or violation of
                these Terms.
              </p>

              <h2>13. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the United Arab Emirates, without regard to its
                conflict of law principles.
              </p>

              <h2>14. Dispute Resolution</h2>
              <p>
                Any disputes arising out of or related to these Terms or the
                Services will be resolved through binding arbitration in
                accordance with the rules of the [Arbitration Body]. You waive
                your right to a jury trial or to participate in a class action.
              </p>

              <h2>15. Severability</h2>
              <p>
                If any provision of these Terms is found to be invalid or
                unenforceable, the remaining provisions will continue to be
                valid and enforceable.
              </p>

              <h2>16. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
                <ul>
                  <li>Email: info@codeanew.com</li>
                  <li>Phone: +971 50 426 4650</li>
                  <li>Address: SPC Free Zone, Sharjah, UAE</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfUse;
