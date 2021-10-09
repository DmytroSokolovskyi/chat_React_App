import cl from "./ChatMessage.module.css";
import Massage from "../massage/Massage";

export default function ChatMessage({contact, error}) {
    return (
        <div className={cl.chatMessagesDiv}>
            {contact.massages.map(massage => <Massage massage={massage} imgAva={contact.photo} error={error} key={massage.time}/>)}
            {error && <div style={{color: "red"}}>{error}</div>}
        </div>
    );
};
