import cl from './Contact.module.css';
import moment from "moment";
import UserAvatar from "../userAvatar/UserAvatar";

export default function Contact({contact, choseContact, contact: {login, online, photo, massages, id}}) {
    const lastMsg = massages[contact.massages.length - 1];

    return (
        <div className={cl.mainContact} onClick={() => choseContact(id)}>
            <UserAvatar imgUrl={photo} online={online} width={"40px"}/>
            <div className={cl.contactInfo}>
                <div className={cl.contactLogin}>
                    {login}
                </div>
                <div className={cl.contactLastMsg}>
                    {lastMsg.value}
                </div>
            </div>
            <div className={cl.lastMsgTime}>
                {moment(lastMsg.time).format("MMM Do YY")}
            </div>
        </div>
    );
};
