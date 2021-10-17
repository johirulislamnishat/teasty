import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex space-x-6'>
            <nav>
                <NavLink to='/lunch'>Lunch</NavLink>
            </nav>
        </div>
    );
};

export default Header;