import './Header.css'
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="Logo" className="logo"/>
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/">Bikes</a></li>
        <li><a href="/">Gear</a></li>
        <li><a href="/">Parts</a></li>
        <li><a href="/">Tires</a></li>
        <li><a href="/">Service-Info</a></li>
        <li><a href="/">Catalogues</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <ul className="icons">
        <li>
          <a href="/"><FontAwesomeIcon icon={faSearch} /></a>
        </li>
        <li>
          <a href="/"><FontAwesomeIcon icon={faShoppingBag} /></a>
        </li>
      </ul>
    </div>
  )
}

export default Header;