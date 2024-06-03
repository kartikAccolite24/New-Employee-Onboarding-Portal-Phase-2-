import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer style={{zIndex:"100px"}} className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.branding}>
          <div className={styles.logo}>
            {/* <span>bounteous</span>
            <span>x</span>
            <span>Accolite</span> */}
            <img src="https://lever-client-logos.s3.us-west-2.amazonaws.com/3f46748d-52fd-47dc-ba95-1172d582f4de-1706797958077.png" alt=''/>
          </div>
          <p className={styles.description}>
            A best-in-class digital transformation services provider, we work with Global 2000 clients to amplify new horizons of potential and push the boundaries of what's possible for exponential success.
          </p>
          <br />
          <div className={styles.socialMedia}>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className={styles.links}>
          <div>
            <h4><b><u>Services</u></b></h4>
            <ul>
              <li><a href="#">Data & AI</a></li>
              <li><a href="#">Cloud & DevOps</a></li>
              <li><a href="#">Digital Product Engineering</a></li>
              <li><a href="#">Customer Experience and Design</a></li>
            </ul>
          </div>
          <div>
            <h4><b><u>Industries</u></b></h4>
            <ul>
              <li><a href="#">Banking, Financial Services & Insurance</a></li>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Telecom & Media</a></li>
              <li><a href="#">Healthcare</a></li>
              <li><a href="#">Logistics</a></li>
            </ul>
          </div>
          <div>
            <h4><b><u>Company</u></b></h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Our Thinking</a></li>
              <li><a href="#">Our Work</a></li>
            </ul>
          </div>
          <div>
            <h4><b><u>Careers</u></b></h4>
            <ul>
              <li><a href="#">Available Positions</a></li>
            </ul>
          </div>
        </div>
        <div><p style={{color:"white" , marginTop:"50px"}}>@ Bounteous X Accolite. All rights reserved</p></div>
      </div>
    </footer>
  );
};
export default Footer;