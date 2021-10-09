import {SET_AUTH, SET_CHAT, SET_CONTACT, SET_MSG, SET_STATE, SET_USER} from "./actionsType";

export const createContact = (value) => {
    return {type: SET_CONTACT, payload: value};
};

export const choseChat = (value) => {
    return {type: SET_CHAT, payload: value};
};

export const setMsg = (value) => {
    return {type: SET_MSG, payload: value};
};

export const setState = (value) => {
    return {type: SET_STATE, payload: value};
};

export const setUser = (value) => {
    return {type: SET_USER, payload: value};
};

export const setAuth = (value) => {
    return {type: SET_AUTH, payload: value};
};
