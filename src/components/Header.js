import React from 'react'
import PropTypes from 'prop-types'


const Header = (props) => {
    return (
        <header>
            <h1 >Hello {props.title}, from React Component</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'user',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const styleSheet = {
    color:'blue', 
    backgroundColor: 'black',
}

export default Header
