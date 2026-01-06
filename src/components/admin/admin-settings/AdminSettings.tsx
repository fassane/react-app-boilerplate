import { useState } from 'react';
import "./AdminSettings.scss";
import SettingNavTab from './SettingNavTab';
import { Outlet } from 'react-router-dom';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import AddOrUpdateAdminModal from './Modals/AddOrUpdateAdminModal';



const AdminSettings = () => {

    const [show, setShow] = useState<boolean>(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="custom-page admin__settings">
            <div className="pb-5 custom_top__wrapper">
                <div className="title_and_btn__wrapper">
                    <div className="title-wrapper">
                        <h2 className="m-0 pb-2 admin_top__title">
                            Paramètres
                        </h2>
                    </div>
                    <div className="btn-wrapper">
                        <button 
                            title="Add"
                            className="btn theme__btn"
                            onClick={handleShow}
                        >
                            <span><MdOutlineAddCircleOutline /></span>
                            <span>Ajouter un admin</span>
                        </button>
                        <AddOrUpdateAdminModal 
                            show={show}
                            handleClose={handleClose}
                        />
                    </div>
                </div>
            </div>
            <div className="custom_content__wrapper">
                <div className="nav-tabs--wrapper">
                    <SettingNavTab />
                </div>
                <div className="pt-3 custom-custom">
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default AdminSettings;