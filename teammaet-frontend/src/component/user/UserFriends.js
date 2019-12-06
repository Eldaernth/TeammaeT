import React, {useContext, useEffect} from "react";
import {Link} from "react-router-dom";
import UserStyling from "../../styling/User.module.css";
import {FriendsContext} from "../../context/FriendsContext";

export default function UserFriends({id}) {
    const {friends,friendMethods,setFriends} = useContext(FriendsContext);

    useEffect(() => {
            setFriends([]);
            friendMethods.getFriends(id);
        },[id]
    );

    return(
        <>
        {friends.map((row) =>
                <Link to={`/user/${row.id}`} className={UserStyling.link}>
                    <div className={UserStyling.img_wrap}>
                        <label className={UserStyling.avatar}><img id="photo" className={UserStyling.friend_icon}
                                                                   src={row.friendBlob}/></label>
                        <p className={UserStyling.img_description}>{row.name}</p>
                    </div>
                </Link>
            )
        }
        </>
    )
}