import React from 'react';
import "../Table.scss";
import EmptyAlert from '../../../shared/Alert/EmptyAlert';
import TableSkeleton from '../../../shared/TableSkeleton';
import BootstrapTable from 'react-bootstrap-table-next';
import { MdEdit } from 'react-icons/md';
import { FaEye, FaTrashAlt } from 'react-icons/fa';
import AddOrUpdateAdminModal from '../../AdminSettings/Modals/AddOrUpdateAdminModal';



const UpdateAdministratorButton = ({item}: {item: any}) => {
    const [show, setShow] = React.useState<boolean>(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <button
                className="btn table_action__btn with-tooltip"
                data-tooltip-content="Modifier"
                onClick={handleShow}
            >
                <MdEdit className="edit-action-icon" />
            </button>
            <AddOrUpdateAdminModal 
                show={show}
                handleClose={handleClose}
                item={item}
            />
        </>
    );
};


function AdministratorTable() {

    let isLoading: boolean = false;

    const nameFormatter = (cell: any, row: any) => {
        return (
            <div className="d-flex gap-3 align-items-center">
                <div className="photo__wrapper">
                    <img
                        src="/images/default.png"
                        className="photo"
                        alt="Photo"
                    />
                </div>
                <p className="m-0 fullname">{cell} {row?.lastName}</p>
            </div>
        );
    };
    const actionFormatter = (cell: any, row: any) => {
        return (
            <>
                <div className="d-flex justify-content-center gap-3">
                    <div className="action_btn__wrapper">
                        <button
                            className="btn table_action__btn with-tooltip"
                            data-tooltip-content="Supprimer"
                        >
                            <FaEye className="see_icon" />
                        </button>
                    </div>
                    <div className="action_btn__wrapper">
                        <UpdateAdministratorButton item={row} />
                    </div>
                    <div className="action_btn__wrapper">
                        <button
                            className="btn table_action__btn with-tooltip"
                            data-tooltip-content="Supprimer"
                        >
                            <FaTrashAlt className="delete_icon" />
                        </button>
                    </div>
                </div>
            </>
        );
    };

    const columns = [
        {
            dataField: "firstName",
            text: "Photo & Nom",
            formatter: nameFormatter
        },
        {
            dataField: "email",
            text: `Email`,
        },
        {
            dataField: "role",
            text: `Rôle`,
        },
        {
            dataField: "id",
            text: "Actions",
            formatter: actionFormatter,
        },
    ];
    
    return (
        <div className="col-lg-12">
            <div className="admin-table">
                {!!isLoading && <TableSkeleton headers={columns} />}
                {!isLoading && (
                    <>
                        <BootstrapTable
                            keyField="id"
                            data={data}
                            columns={columns as any}
                            condensed
                            hover
                            wrapperClasses="table-responsive admin-table"
                            noDataIndication={() => (
                                <EmptyAlert customTextual="No data" />
                            )}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default AdministratorTable;

const data = [
    {    
        id: 1,
        firstName: "Alima",
        lastName: "Tall",
        email: "alimatall@gmail.com",
        role: "Admin",
        phone: "33 000 00 00"
    },
    {    
        id: 2,
        firstName: "Alima",
        lastName: "Tall",
        email: "alimatall@gmail.com",
        role: "Admin",
        phone: "33 000 00 00"
    },
    {    
        id: 3,
        firstName: "Alima",
        lastName: "Tall",
        email: "alimatall@gmail.com",
        role: "Admin",
        phone: "33 000 00 00"
    },
]
