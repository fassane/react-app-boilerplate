import React from "react";
import "./Alert.scss";
import { Link } from "react-router-dom";


const EmptyAlert = ({
    customTextual,
    returnable = false,
    redirectTo = "",
    btnText = "",
}: {
    customTextual: string;
    returnable?: boolean;
    redirectTo?: string;
    btnText?: string;
}) => {
    return (
        <div className="empty_alert__container w-100">
            <div className="empty_alert__content">
                <div className="empty_alert_icon__container">
                    <span className="icon-info-square empty_alert__icon"></span>
                </div>
                <div className="empty_alert_textual__container">
                    <p>{customTextual}</p>
                    {returnable === true && (
                        <div className="d-flex justify-content-end">
                            <Link
                                className="btn returnable_link__btn"
                                to={redirectTo}
                                type="button"
                            >
                                {btnText}
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmptyAlert;