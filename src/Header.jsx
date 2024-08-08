import React from 'react';
import './Header.css';
import { faker } from '@faker-js/faker'

function Header() {
    return <div>
        <div className='header-div'>
            <h1>DEV@Deakin</h1>
        </div>
        <div className='image-div'>
            {/* <img src={faker.image.urlLoremFlickr({ category: 'cats' }, { height: 1080 }, { width: 600 })} alt="Header" style={{ width: '100%', height: '400px' }} /> */}
        </div>
    </div>
}

export default Header