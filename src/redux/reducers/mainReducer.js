import {userContacts} from "../../data";
import {SET_AUTH, SET_CHAT, SET_CONTACT, SET_MSG, SET_STATE, SET_USER} from "../actions";

let initialState = {contacts: userContacts, chosenContact: '', auth: false, user: {}};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT: {
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
                chosenContact: {...action.payload}
            };
        }

        case SET_CHAT: {
            return {...state, chosenContact: {...action.payload}};
        }

        case SET_MSG: {
            const {id, userMsg} = action.payload;
            state.contacts.forEach(contact => (contact.id !== id) ? contact : contact.massages.push(userMsg));
            state.contacts.forEach(item => (item.id === id && userMsg.sender) ? item.online = true : item);
            return {...state};
        }

        case SET_STATE: {
            return {...action.payload}
        }

        case SET_USER: {
            return {...state, user: action.payload}
        }

        case SET_AUTH: {
          return {...state, auth: action.payload}
        }

        default:
            return state;
    }
};
