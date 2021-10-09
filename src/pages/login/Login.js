import cl from "./Login.module.css";
import firebase from "firebase/compat";
import {useDispatch} from "react-redux";
import {setAuth, setUser} from "../../redux/actions";
import {useHistory} from "react-router";

export default function Login() {
    const history = useHistory();
    const auth = firebase.auth();
    const dispatch = useDispatch();

    const googleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider);
        if (user) {
            dispatch(setUser(user.multiFactor.user));
            dispatch(setAuth(true));
            history.push('/');
        }
    };

    return (
        <div className={cl.mainLoginDiv}>
            <div className={cl.buttonsDiv}>
                <button className={cl.googleDiv} onClick={googleLogin}>
                    Login with Google
                </button>
            </div>
        </div>
    );
}
