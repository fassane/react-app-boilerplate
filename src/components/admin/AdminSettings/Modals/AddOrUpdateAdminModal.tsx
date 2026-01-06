import React from "react";
import Modal from "react-bootstrap/Modal";
import { Input } from "../../../shared/Input";


function AddOrUpdateAdminModal({
    show,
    handleClose,
    item
}: {
    show: boolean;
    handleClose: () => void;
    item?: any
}) {

    return (
        <Modal 
            show={show} 
            onHide={handleClose}
            size="lg" 
            className="admin__modal"
        >
            <Modal.Header className="border-0 modal-header-wrapper" closeButton>
                <Modal.Title className="custom_modal__title">
                    {!!item ? 'Update' : 'Add'} an admin
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="add-sub-admin-form-wrapper">
                    <form onSubmit={() => {}}>
                        <div className="form-content">
                            <div className="row form-row">
                                <div className="col-md-12 col-lg-6 mb-3 aptm-wrapper">
                                    <Input
                                        label="First name"
                                        type="text"
                                        customClassInput="modal__input"
                                        placeholder="First name"
                                        id="__first_name"
                                    />
                                </div>
                                <div className="col-md-12 col-lg-6 mb-3 aptm-wrapper">
                                    <Input
                                        label="Last name"
                                        type="text"
                                        customClassInput="modal__input"
                                        placeholder="Last name"
                                        id="__last_name"
                                    />
                                </div>
                                <div className="col-md-12 col-lg-6 mb-3 aptm-wrapper">
                                    <Input
                                        label="Email"
                                        type="email"
                                        customClassInput="modal__input"
                                        placeholder="Email"
                                        id="__email"
                                    />
                                </div>
                                <div className="col-md-12 col-lg-6 mb-3 aptm-wrapper">
                                    <label
                                        htmlFor="__role"
                                        className={`form-label custom-form-label`}
                                        aria-labelledby="role"
                                    >
                                        Rôle
                                    </label>
                                    <select
                                        className="form-select custom-form-control mb-2 modal__input"
                                        id="__role"
                                    >
                                        <option selected disabled>Choose</option>
                                        <option value={"admin"}>Admin</option>
                                        <option value={"helper"}>Super Admin</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="pt-3 btn-wrapper d-flex align-items-center justify-content-end gap-3 flex-wrap">
                            <button
                                title="Cancel"
                                type="button"
                                className="btn cancel__btn"
                                onClick={handleClose}
                            >
                                Cancel
                            </button>
                            <button
                                title="Save"
                                type="submit"
                                className="btn submit__btn theme__btn"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default AddOrUpdateAdminModal;
