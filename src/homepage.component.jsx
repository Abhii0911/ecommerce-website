import React from 'react';
import './homepage.styles.scss'
const HomePage= () => {
    return (
    <div className="homepage"> 
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">JACKETS</h1>
                        <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">DENIM</h1>
                        <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">GILRS</h1>
                        <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">BOYS</h1>
                        <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div> 
    )   
}

export default HomePage