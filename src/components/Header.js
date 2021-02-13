import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className='header'>
            <h1 >Hello {title}, from React Component</h1>            
            <Button color= {showAdd ? 'red' : 'Green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
            
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
