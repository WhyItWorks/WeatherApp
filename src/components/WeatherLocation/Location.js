import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

const Location = ({ city }) => {
    return (
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
    )
}

Location.proTypes = {
    city: PropTypes.string.isRequired,
}
export default Location;