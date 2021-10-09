import cl from "./ContactMini.module.css";

export default function ContactMini(props) {
    const {contact, params, choseContactChat} = props;

    const sendChoseId = () => {
        if (choseContactChat)
            choseContactChat(contact.id);
    };

    return (
        <div className={cl.contactMiniDiv} onClick={sendChoseId}>
            <div className={cl.imgContactMini} style={{
                backgroundImage: `url(${contact.photo})`,
                width: `${params}`,
                height: `${params}`
            }}> </div>
            <div className={cl.loginContactMini}>{contact.login}</div>
        </div>
    );
};
