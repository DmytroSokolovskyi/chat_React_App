import {useState} from "react";
import cl from "./WriteMSG.module.css";
import {useDispatch} from "react-redux";
import {createMsg} from "../../services";


export default function WriteMSG({contact, answerMe}) {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();

    const sendMSG = (e) => {
        e.preventDefault();
        dispatch(createMsg(contact.id, inputValue));
        answerMe();
        setInputValue("");
    };

    return (
        <form className={cl.inputForm} onSubmit={sendMSG} autoComplete={"off"}>
            <input className={cl.myInput} name={"massage"} value={inputValue} placeholder={"Type your message"}
                   onInput={(e) => setInputValue(e.target.value)} type="search"/>
        </form>
    );
};
