import moment from "moment";
import {choseChat, createContact, setMsg} from "../redux/actions";

export const createNewContact = (login) => (dispatch) => {
    const newContact = {
        id: login.toLowerCase(),
        login: login,
        online: true,
        photo: "",
        massages: [{
            sender: false,
            time: moment().format(),
            value: `Hi ${login}`
        }]
    };
    dispatch(createContact(newContact));
};

export const findChoseContact = (contacts, id) => (dispatch) => {
    dispatch(choseChat(contacts.find(item => item.id === id)));
};

export const createMsg = (id, msg) => (dispatch) => {
    const userMsg = {sender: false, time: moment().format(), value: msg};
    dispatch(setMsg({id, userMsg}));
};




