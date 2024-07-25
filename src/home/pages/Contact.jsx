import React from 'react';
import { Link } from 'react-router-dom';


function Contact() {
  return (
    <div>
      <div className="inner-banner">
        <section className="w3l-breadcrumb py-5">
          <div className="container py-lg-5 py-md-3">
            <h2 className="title">Contact Us</h2>
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
                  <h3 className="title-big">Send us a Message</h3>
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
                    <button type="submit" className="btn btn-primary btn-style mt-3">Send Message</button>
                  </form>
                </div>
                <div className="col-lg-4 cont-details">
                  <address>
                    <h5 className="">Contact Address</h5>
                    <p>
                      <span className="fa fa-map-marker"></span>
                      Addis Ababa, Ethiopia
                    </p>
                    <p>
                      <Link to="mailto:info@example.com">
                        <span className="fa fa-envelope"></span>
                        info@example.com
                      </Link>
                    </p>
                    <p>
                      <span className="fa fa-phone"></span>
                      <Link to="tel:+251-000-888-999"> +251-000-888-999</Link>
                    </p>
                    <Link to="/donate" className="btn btn-style btn-outline-primary mt-4">
                      <span className="fa fa-heart mr-1"></span>
                      Make Donation
                    </Link>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          title='Addis Ababa Location'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.0202898255!2d38.61332811145564!3d8.963479542288168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1721463578321!5m2!1sen!2set"
          style={{ border: 0, width: '100%', height: '450px' }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
     
    </div>
  );
}

export default Contact;
