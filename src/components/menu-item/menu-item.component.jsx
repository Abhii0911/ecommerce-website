import React from 'react';
import { withRouter } from 'react-router';//its an HOC.It is a function that takes an component as argument, modifies it and return  a new component.
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (//destructuring all property from our props
    <div className= {`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem); //it will reurn back a super powered component that can have access o the props of a component passed by router component. It will have access to location, history, match props.