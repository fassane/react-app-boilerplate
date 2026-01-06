import React, { useEffect } from 'react';
import { FaQuestionCircle, FaTags } from 'react-icons/fa';
import { FaDochub, FaPeopleGroup } from 'react-icons/fa6';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const tabs = [
    {
        id: 'setting-admins',
        title: 'Administrateurs',
        link: '/admin/settings/administrators',
        icon: <FaPeopleGroup />
    },
    {
        id: 'setting-options',
        title: 'Options',
        link: '/admin/settings/options',
        icon: <FaDochub />
    },
    {
        id: 'setting-tags',
        title: 'Tags',
        link: '/admin/settings/tags',
        icon: <FaTags />
    },
    {
        id: 'setting-faqs',
        title: 'FAQs',
        link: '/admin/settings/faqs',
        icon: <FaQuestionCircle />
    },

];


const SettingNavTab = () => {

    let navigate = useNavigate();
    let location = useLocation();
    useEffect(() => {
      location?.pathname === '/admin/settings' &&
      navigate('/admin/settings/administrators');
    }, [location?.pathname])
    
    return (
        <div className="nav_tabs__wrapper">
            <ul className="tabs__container custom-settings-nav-tabs ps-0">
                {tabs.map((tab, key) => (
                    <NavLink
                        to={`${tab?.link}`}
                        className={`tab_item 
                            ${
                                location?.pathname?.startsWith(tab?.link)
                                ? "tab_item__active"
                                : ""
                            }
                        `}
                        key={key}
                        title={tab?.title}
                    >
                        <span>{tab?.icon}</span>
                        <span className="ps-2">{tab?.title}</span>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default SettingNavTab;