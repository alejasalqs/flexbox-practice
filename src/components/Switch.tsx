// import React from 'react'
// import PropTypes from 'prop-types'
import AlingContent from './AlingContent';
import FlexDirection from './FlexDirection';
import JustifyContent from './JustifyContent';

function Switch({ componentName }) {
  switch (componentName) {
    case 'FlexDirection':
        return <FlexDirection />

    case 'JustifyContent':
        return <JustifyContent />

    case 'AlingContent':
        return <AlingContent />
  
    default:
        return <FlexDirection />
  } 
}

// Switch.propTypes = {
//     componentName: PropTypes.string
// }

export default Switch

