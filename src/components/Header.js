import PropTypes from 'prop-types'
import React from 'react'
import ppiconwht from '../images/pp-icon-white.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>

    <img src={ppiconwht} alt="ppenicka logo" className="icon fa-diamond" />

    <div className="content">
      <div className="inner">
        <h1>Petr Penicka</h1>
        <p>
        Full-stack software developer focused on JavaScript technologies
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Welcome
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
          About Me
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
