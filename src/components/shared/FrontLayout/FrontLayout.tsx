import React from 'react';
import "./FrontLayout.scss";
import FrontHeader from './FrontHeader/FrontHeader';
import { Outlet } from 'react-router-dom';
import FrontFooter from './FrontFooter/FrontFooter';


function FrontLayout() {
    return (
        <>
            <FrontHeader />
            <div className="front_layout">
                <Outlet />
            </div>
            <div style={{ padding: "6rem 0" }}></div>
            <FrontFooter />
        </>
    )
}

export default FrontLayout;