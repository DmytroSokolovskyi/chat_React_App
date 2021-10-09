import cl from "./ChatPage.module.css";
import { Route, Switch} from "react-router-dom";
import ChadSide from "../../components/chadSide/ChadSide";
import UserSide from "../../components/userSide/UserSide";

export default function ChatPage() {

    return (
        <div className={cl.mainDivChatPage}>
            <main>
                <UserSide/>
                <Switch>
                    <Route exact={true} path={"/:id"} render={(props) => {
                        return <ChadSide {...props}/>;
                    }}/>
                </Switch>
            </main>
            <footer/>
        </div>
    );
};
