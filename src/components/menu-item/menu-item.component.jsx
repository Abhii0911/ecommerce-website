import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => (//destructuring all property from our props
    <div className= {`${size} menu-item`} >
        {/* style attribute in jsx is a JS object with all prop name. */}
        <div className="background-image" style={{
        backgroundImage : `url(${imageUrl})`
    }} />
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
    </div>
</div>
) 

export default MenuItem;