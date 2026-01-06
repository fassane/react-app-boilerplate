import ContactCard from "./cards/ContactCard";


const MessagesContactAdmin = () => {
    return (
        <div className="custom-page admin__settings">
            <div className="pb-5 custom_top__wrapper">
                <div className="title-wrapper">
                    <h2 className="m-0 pb-2 admin_top__title">
                        Messages de contact
                    </h2>
                </div>
            </div>
            <div className="messages-contact">
                <div className="p-3 bg_colgate">
                    <div className="row messages-row">
                        {!!messagesContactData &&
                        messagesContactData?.map((item, index) => (
                            <div className="col-lg-12 col-wrapper" key={index}>
                                <ContactCard 
                                    message={item} 
                                    key={item?.id}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessagesContactAdmin;


const messagesContactData = [
    {
        id: 1,
        subject: "Juste a propos de tel sujet",
        sender: "Sadio Member",
        status: "new",
    },
    {
        id: 2,
        subject: "Juste a propos de tel sujet 2",
        sender: "Mbaye Member",
        status: "not_read",
    }
]