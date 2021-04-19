import React, { Component } from 'react';
import iconFacebook from '../assets/imgs/icon-facebook.svg';
import iconTwitter from '../assets/imgs/icon-twitter.svg';
import iconYoutube from '../assets/imgs/icon-youtube.svg';
import iconInstagram from '../assets/imgs/icon-instagram.svg';

export default class Footer extends Component {
  render () {
    return (
      <div>
        <div className="footer">
          <div className="container">
            <div className="samet-4">
              <div className="samet-12">
              <div className="samet-4 footer-items">
                <span>Games</span>
                <span>Membership</span>
                <span>Download</span>
              </div>
              <div className="samet-4 footer-items">
                <span>Contact Us</span>
                <span>Blog</span>
              </div>
              <div className="samet-4 footer-items">
                <span>FAQs</span>
                <span>Service Status</span>
              </div>
              </div>
            </div>
            <div className="samet-4"></div>
            <div className="samet-4">
              <div className="samet-12">
                <div className="samet-6 footer-items">
                    <span className="social-text">Follow Us!</span>
                    <div className="footer-images">
                      <img alt="icon-facebook" src={iconFacebook} />
                      <img className="icon-twitter" alt="icon-twitter" src={iconTwitter} />
                      <img alt="icon-instagram" src={iconInstagram} />
                      <img alt="icon-youtube" src={iconYoutube} />
                    </div>
                </div>
                <div className="samet-6 footer-items">
                  <span className="social-text">Site Language!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="samet-6 copyright-links">
              <a href="/">Terms of Use</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Cookies</a>
            </div>
            <div className="samet-6 all-rights-reserved">
              Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
   