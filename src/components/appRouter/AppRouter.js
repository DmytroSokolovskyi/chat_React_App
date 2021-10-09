import {Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import ChatPage from "../../pages/chatPage/ChatPage";
import Login from "../../pages/login/Login";

export default function AppRouter() {
    const {mainReducer} = useSelector(state => state);
    let {auth} = mainReducer;
    if (!auth) {
        try {
            const state = JSON.parse(localStorage.getItem('state'));
        if (state) {
            auth = state.auth;
        }
        } catch (e) {
            console.log(e);
        }
    }

return auth ?
    (
        <Switch>
            <Route exact={true} path={"/login"} component={Login}/>
            <Route path={"/"} render={(props) => {
                return <ChatPage {...props}/>
            }}/>
        </Switch>
    )
    :
    (
        <Switch>
            <Route path={"/"} component={Login}/>
        </Switch>
    )
}
