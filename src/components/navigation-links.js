import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.link1}</span>
      <span className="navigation-links-text1 Navigation-Link">
        {props.link2}
      </span>
      <span className="navigation-links-text2 Navigation-Link">
        {props.link3}
      </span>
      <span className="navigation-links-text3 Navigation-Link">
        {props.link31}
      </span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  link2: 'CARS FOR SALE',
  link3: 'FINANCE',
  link1: 'About US',
  link31: 'news & reviews',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
  link31: PropTypes.string,
}

export default NavigationLinks
