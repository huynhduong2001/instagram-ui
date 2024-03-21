import { useDispatch, useSelector } from "react-redux";
import ProfileUserDetails from "../../Components/ProfileComponents/ProfileUserDetails";
import ReqUserPostPart from "../../Components/ProfileComponents/ReqUserPostPart";
import { useParams } from "react-router-dom";
import { isFollowing, isReqUser } from "../../Config/Logics";
import { useEffect } from "react";
import { findUserByUsernameAction, getUserProfileAction } from "../../Redux/User/Action";

const Profile = () => {

    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const {username} = useParams()
    const {user} = useSelector(store=>store)
    const isRequser = isReqUser(user.reqUser?.id, user.findByUsername?.id)
    const isFollowed = isFollowing(user.reqUser, user.findByUsername)

    useEffect(()=>{
        const data = {
            jwt:token, username
        }
        dispatch(getUserProfileAction(token))
        dispatch(findUserByUsernameAction(data))    
    },[username, user.follower, user.following])
    return ( 
        <div className="px-20">
                <div>
                    {user.reqUser && <ProfileUserDetails user={isRequser?user.reqUser:user.findByUsername} isFollowing={isFollowed} isReqUser={isRequser}/>}
                </div>
                <div>
                    {user.reqUser && <ReqUserPostPart user={isRequser?user.reqUser:user.findByUsername}/>}
                </div>
            
        </div>

     );
}
 
export default Profile;
<div>Profile</div>