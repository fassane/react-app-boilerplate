import React from 'react';
import "./AdminDashboard.scss";
import { Sidebar } from '@/components/ui/sidebar';


const AdminDashboard = () => {
    return (
        <div className="admin__dashboard">
            <div className="pb-4 custom_top__wrapper">
                <h2 className="m-0 pb-2 admin_top__title">
                    Tableau de bord
                </h2>
                <p className="m-0 admin_welcome__paragraph">
                    Hi, Fatoumata, welcome on Boilerplate Admin!
                </p>
            </div>
            <div className="custom_content__wrapper">
                
                <div className="charts__container pb-4">
                    
                </div>
                <div className="charts__container pb-4">
                    
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;