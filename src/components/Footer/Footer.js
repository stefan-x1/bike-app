import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return(
    <div className="Footer">
      <div className="footer-list">
        <h5>Social share</h5>
        <ul className="social-icons">
          <li><a href="/"><FontAwesomeIcon icon={faFacebookF}/></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faInstagram}/></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faTwitter}/></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
        </ul>
      </div>
      <div className="footer-list">
        <h5>Event info</h5>
        <ul>
          <li><a href="/">Enter Now</a></li>
          <li><a href="/">Event Info</a></li>
          <li><a href="/">Course Maps</a></li>
          <li><a href="/">Race Pack</a></li>
          <li><a href="/">Results</a></li>
          <li><a href="/">FAQs</a></li>
          <li><a href="/">Am I Registered?</a></li>
        </ul>
      </div>
      <div className="footer-list">
        <h5>Event info</h5>
        <ul>
          <li><a href="/">Volunteers</a></li>
          <li><a href="/">Gallery</a></li>
          <li><a href="/">Press</a></li>
          <li><a href="/">Results</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Service Plus</a></li>
          <li><a href="/">Contacts</a></li>
        </ul>
      </div>
      <div className="footer-list">
        <h5>Event info</h5>
        <ul>
          <li><a href="/">Gallery</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Videos</a></li>
          <li><a href="/">Results</a></li>
          <li><a href="/">FAQs</a></li>
          <li><a href="/">Results</a></li>
          <li><a href="/">Volunteers</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;