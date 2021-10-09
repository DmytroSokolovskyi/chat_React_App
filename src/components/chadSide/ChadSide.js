import cl from "./ChadSide.module.css";
import WriteMSG from "../writeMSG/WriteMSG";
import {useDispatch, useSelector} from "react-redux";
import ContactMini from "../contactMini/ContactMini";
import ChatMessage from "../chatMessage/ChatMessage";
import {memo} from "react";
import {getJoke} from "../../services";
import {useFetch} from "../../hooks";

export default memo(function ChadSide({match: {params: {id}}}) {
        const {mainReducer} = useSelector(state => state);
        const {chosenContact} = mainReducer;
        const dispatch = useDispatch();
        const [fetchJoke, error] = useFetch();

        const answerMe = () => {
            localStorage.setItem("state", JSON.stringify(mainReducer));
            setTimeout(() => {
                fetchJoke(dispatch(getJoke(id)))
            }, Math.floor(Math.random() * (15000 - 10000 + 1)) + 10000);
        };

        return (
            <div className={cl.chadSide}>
                <div className={cl.headerChat}>
                    <ContactMini contact={chosenContact} params={"50px"}/>
                </div>
                <div className={cl.chatByContact}>
                    {chosenContact && <ChatMessage contact={chosenContact} error={error}/>}
                </div>
                <div className={cl.writeMSG}>
                    <WriteMSG contact={chosenContact} answerMe={answerMe}/>
                </div>
            </div>
        );
    }
)
