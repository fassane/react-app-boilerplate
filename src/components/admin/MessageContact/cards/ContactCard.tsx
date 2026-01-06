import { Accordion } from "react-bootstrap";
import { InputQuill } from "../../../shared/Input";
import { getMessageContactStatus, getMessageContactStatusClass } from "../../../../utils/Utils";


const ContactCard = ({ message }: { message: any }) => {

    return (
        <div >
            <div className="mb-3">
                <Accordion
                    className="contact-accordion"
                    id="contactAccordion"
                >
                    <Accordion.Item
                        eventKey={`${message?.id}`}
                        className="contact-acordion-item mb-1"
                    >
                        <Accordion.Header className="message-contact-card pb-0">
                            <div className="px-2 py-3 mb-2 flex-m gap-1 w-100">
                                <div className="row w-100 align-items-center">
                                    <div className="col-lg-7">
                                        <div
                                            className="message-contact-description btn p-0 text-start"
                                            style={{
                                                textOverflow: "ellipsis",
                                            }}
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#responseContact${message?.id}`}
                                            role="button"
                                        >
                                            {message?.subject}
                                        </div>
                                        <p className="message-contact-frequence fs-14 mb-0">
                                            {message?.sender}
                                        </p>
                                    </div>

                                    <div className="col-lg-2">
                                        <label 
                                            title={getMessageContactStatus(message)}
                                            className={`status__formatter ${getMessageContactStatusClass(message)}`}
                                        >
                                            {getMessageContactStatus(message)}
                                        </label>
                                    </div>
                                    <div className="col-lg-3 flex-r">
                                        <p className="message-responder mb-0">
                                            Sadio Admin
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="card card-body admin-content-message mb-1">
                                <div className="border-bottom message-contact-content pb-2">
                                    <p
                                        className="mb-3"
                                    >
                                        Testt
                                    </p>
                                </div>
                                <div className="border-bottom">
                                    <ResponseItem response={message} />
                                </div>
                                <ResponseForm item={message} />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default ContactCard;


const ResponseForm = ({ item }: { item: any }) => {
    return (
        <div className="response-form">
            <form >
                <div className="row mb-4 mt-4">
                    <div className="col-md-12 mb-3">
                        {/* <InputQuill
                            label="Votre reponse"
                            value={``}
                            onChange={() => {}}
                            placeholder="Votre reponse"
                        /> */}
                    </div>
                </div>
                <div className="gap-3 flex-r align-center row my-4">
                    <div className="col-md-6 text-end">
                        <button
                            type="submit"
                            className="btn btn-theme-custom"
                        >
                            Envoyer
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export const ResponseItem = ({ response }: { response: any }) => {
    return (
        <div className="row my-4">
            <div className="col-12 mb-2">
                <img
                    className="profil-image mx-1"
                    src="/images/appImages/team2.png"
                    alt="Avatar"
                    width={"50"}
                    height={"50"}
                    loading="lazy"
                    style={{ borderRadius: "50%" }}
                />
                <p className="text-response fs-12 fw-300 sender-name">
                    Par &nbsp;
                    <strong>Fred Dupont</strong>
                    <br />
                    <span className="cm-sender-email">
                        Le 12 Juillet 2025
                    </span>
                </p>
            </div>
            <div className="col-12 mx-1">
                <p
                    className="text-response fs-12 fw-300"
                >
                    Juste une reponse chill
                </p>
            </div>
        </div>
    );
};