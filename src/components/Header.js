import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = (props) => {

    const onClick = (e) => {
        console.log('Props - Clicked !')
    }

    return (
        <header className='header'>
            <h1 >Hello {props.title}, from React Component</h1>            
            <Button color='green' text='ADD' onClick={onClick}/>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'user',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const styleSheet = {
//     color:'blue', 
//     backgroundColor: 'black',
// }

export default Header
