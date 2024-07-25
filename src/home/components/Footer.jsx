import React from 'react';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="w3l-footer-main">
      <div className="w3l-sub-footer-content">
        <footer className="footer-14">
          <div id="footers14-block">
            <div className="container">
              <div className="footers20-content">
                <div className="d-grid grid-col-4 grids-content">
                  <div className="column">
                    <h4>Our Address</h4>
                    <p>
                      <span className="fa fa-map-marker"></span>
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                  <div className="column">
                    <h4>Call Us</h4>
                    <p>Mon - Fri 10:30 - 18:00</p>
                    <p>
                      <span className="fa fa-phone"></span>
                      <Link to="tel:+251-918-922-547"> +251-918-922-547</Link>
                    </p>
                  </div>
                  <div className="column">
                    <h4>Mail Us</h4>
                    <p>
                      <Link to="mailto:abrahammekuria73@gmail.com">
                        <span className="fa fa-envelope"></span>
                        Abraham Mekuria
                      </Link>
                    </p>
                  </div>
                  <div className="column">
                    <h4>Follow Us On</h4>
                    <ul>
                      <li><Link to="#facebook" aria-label="Facebook"><span className="fa fa-facebook" aria-hidden="true"></span></Link></li>
                      <li><Link to="#linkedin" aria-label="LinkedIn"><span className="fa fa-linkedin" aria-hidden="true"></span></Link></li>
                      <li><Link to="#twitter" aria-label="Twitter"><span className="fa fa-twitter" aria-hidden="true"></span></Link></li>
                      <li><Link to="#google" aria-label="Google Plus"><span className="fa fa-google-plus" aria-hidden="true"></span></Link></li>
                      <li><Link to="#github" aria-label="GitHub"><span className="fa fa-github" aria-hidden="true"></span></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footers14-bottom d-flex">
                <div className="copyright">
                  <p>© 2024 የወንጌላዊ አለምነህ ጀንበሩ ማስታወሻ. All rights reserved. Design by <Link to="https://github.com/21yene" target="_blank" rel="noopener noreferrer">Agarfan Friends</Link></p>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default Footer;
