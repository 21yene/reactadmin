import React from 'react';

function Donate() {
  return (
    <div>
      <div className="inner-banner">
        <section className="w3l-breadcrumb py-5">
          <div className="container py-lg-5 py-md-3">
            <h2 className="title">Donate</h2>
          </div>
        </section>
      </div>
      <div className="position-relative">
        <div className="shape overflow-hidden">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <section className="w3l-contact-7 py-5" id="contact">
        <div className="contacts-9 py-lg-5 py-md-4">
          <div className="container">
            <div className="top-map">
              <div className="row map-content-9">
                <div className="col-lg-8">
                  <h3 className="title-big">Choose payment method</h3>
                  <p className="mb-4 mt-lg-0 mt-2">
                    Your email address will not be published. Required fields are marked *
                  </p>
                  <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="text-right">
                    <div className="form-grid">
                      <input type="text" name="w3lName" id="w3lName" placeholder="Name*" required />
                      <input type="email" name="w3lSender" id="w3lSender" placeholder="Email*" required />
                      <input type="text" name="w3lPhone" id="w3lPhone" placeholder="Phone number*" required />
                      <input type="text" name="w3lSubject" id="w3lSubject" placeholder="Subject" />
                    </div>
                    <textarea name="w3lMessage" id="w3lMessage" placeholder="Message"></textarea>
                    <button type="submit" className="btn btn-primary btn-style mt-3">Pay</button>
                  </form>
                </div>
                <div className="col-lg-4 cont-details">
                  <address>
                    <h5 className="">Payment Options</h5>
                    <p>
                      <span className="fa fa-credit-card"></span>
                      Credit/Debit Card
                    </p>
                    <p>
                      <span className="fa fa-paypal"></span>
                      PayPal
                    </p>
                    <p>
                      <span className="fa fa-bank"></span>
                      Bank Transfer
                    </p>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </div>
  );
}

export default Donate;
