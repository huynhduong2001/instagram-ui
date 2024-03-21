import { useEffect } from "react";
import { RiSettings2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { reqUserPostAction } from "../../Redux/Post/Action";



const ProfileUserDetails = ({user}) => {
    const dispatch = useDispatch()
    const {post} = useSelector(store=>store)
    const token = localStorage.getItem("token")
    const navigate = useNavigate();

    useEffect(()=>{
        if (user){
            const data = {
                jwt: token, userId: user?.id
            }
            dispatch(reqUserPostAction(data))
        }
        
    },[user, post.createdPost])

    return ( 
        <div className="py-10 w-full">
            <div className="flex items-center">
                <div className="w-[15%]">
                    <img 
                        className="w-32 h-32 rounded-full object-cover" 
                        src={user?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} 
                        alt="" 
                    />
                </div>
                <div className="space-y-5">
                    <div className="flex space-x-10 items-center">
                        <p>{user?.username}</p>
                        <button onClick={()=>navigate("/account/edit")}>Chỉnh sửa cá nhân</button>
                        <RiSettings2Fill/>
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <span className="font-semibold mr-2">{post.reqUserPost?.length}</span>
                            <span>bài viết</span>
                        </div>
                        <div>
                            <span className="font-semibold mr-2">{user?.follower?.length}</span>
                            <span>người theo dõi</span>
                        </div>
                        <div>
                            <span>Đang theo dõi</span>
                            <span className="font-semibold mx-2">{user?.following?.length}</span>
                            <span>người dùng</span>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">{user?.name}</p>
                        <p className="font-thin text-sm">{user?.bio}</p>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default ProfileUserDetails;