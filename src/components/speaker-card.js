import React from 'react'

import PropTypes from 'prop-types'

import './speaker-card.css'

const SpeakerCard = (props) => {
  return (
    <div className="speaker-card-speaker-card">
      <div className="speaker-card-image-container">
        <img
          alt={props.image_alt1}
          src={props.image_src}
          className="speaker-card-image"
        />
      </div>
      <span className="speaker-card-first-name">{props.firstName}</span>
      <span className="speaker-card-last-name">{props.lastName}</span>
      <span className="speaker-card-text">{props.role}</span>
    </div>
  )
}

SpeakerCard.defaultProps = {
  image_alt1: 'image',
  firstName: 'AUDI A1 (2013)',
  lastName: 'BLACK - 1.4L',
  image_src: '/playground_assets/8975-300h.jpeg',
  image_alt: 'image',
  role: 'TFSI S LINE 3DR 122 BHP half leather',
}

SpeakerCard.propTypes = {
  image_alt1: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  role: PropTypes.string,
}

export default SpeakerCard
