import cl from "./UserAvatar.module.css";
import {memo} from "react";

export default memo(function UserAvatar(props) {

        return (
            <div className={cl.divImgUser} style={{backgroundImage: `url(${props.imgUrl})`, width: `${props.width}`}}>
                {
                    props.online ?
                        <div className={cl.onlineDivUser} style={{backgroundColor: "green"}}> </div>
                        :
                        <div className={cl.onlineDivUser}> </div>
                }
            </div>
        );
    }
)
