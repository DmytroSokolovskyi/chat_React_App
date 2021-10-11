import cl from "./HeaderUser.module.css";
import UserAvatar from "../userAvatar/UserAvatar";
import InputSearch from "../inputSearch/InputSearch";
import {useDispatch, useSelector} from "react-redux";
import {setAuth} from "../../redux/actions";
import {useHistory} from "react-router";
import {imgUser} from "../../services";

export default function HeaderUser() {
    const {mainReducer} = useSelector(state => state);
    const {user} = mainReducer;
    const dispatch = useDispatch();
    const history = useHistory();

    const signOut = () => {
        dispatch(setAuth(false))
        history.push("/login")
    };

    return (
        <div className={cl.mainHeaderUser}>
            <div className={cl.divImg}>
                {user
                    ?
                    <UserAvatar imgUrl={user.photoURL} online={true} width={"55px"}/>
                    :
                    <UserAvatar imgUrl={imgUser} online={true} width={"55px"}/>
                }

                {user.displayName &&
                <div className={cl.authDiv}>
                    <div className={cl.nameDiv}>{user.displayName}</div>
                    <button onClick={signOut} className={cl.button}>Sign out</button>
                </div>}
            </div>
            <div className={cl.searchChat}>
                <InputSearch/>
            </div>
        </div>
    );
};
