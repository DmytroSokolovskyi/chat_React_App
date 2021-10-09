import {useDispatch, useSelector} from "react-redux";
import Contact from "../contact/Contact";
import moment from "moment";
import {useHistory} from "react-router";
import {findChoseContact} from "../../services";
import {useEffect} from "react";
import {setState} from "../../redux/actions";

export default function Contacts() {
    const {mainReducer} = useSelector(state => state);
    const history = useHistory();
    const dispatch = useDispatch();
    const {contacts} = mainReducer;

    useEffect(() => {
            const state = JSON.parse(localStorage.getItem('state'));

            if (state !== null) {
                dispatch(setState(state));
            }
        },
        [dispatch]);

    const choseContact = (id) => {
        dispatch(findChoseContact(contacts, id));
        history.push(`${id}`);
        localStorage.setItem("state", JSON.stringify({...mainReducer}));
    }

    const sortedContacts = contacts.sort((a, b) => moment.utc(b.massages[b.massages.length - 1].time).diff(moment.utc(a.massages[a.massages.length - 1].time)));

    return (
        <>
            {sortedContacts.map(contact => <Contact contact={contact} choseContact={choseContact} key={contact.id}/>)}
        </>
    );
};
