
import HomeRight from "../../Components/HomeRight/HomeRight";
import PostCard from "../../Components/Post/PostCard";
import StoryCircle from "../../Components/Story/StoryCircle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findPostUserAction } from "../../Redux/Post/Action";
import { findUsersByIdsAction, getPopularUserAction, getUserProfileAction } from "../../Redux/User/Action";
import { hasStory } from "../../Config/Logics";

const HomePage = () => {
    const [userIds, setUserIds] = useState([]);
    const {user, post} = useSelector(store=>store)
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    useEffect(()=>{
        if(token) dispatch(getUserProfileAction(token))
    },[token])
    useEffect(()=>{
        const newIds = user.reqUser?.following?.map((user)=> user.id);
        if (newIds?.length > 0) {
            setUserIds([user.reqUser?.id,...newIds]);
        }
        else setUserIds([user.reqUser?.id]);
    },[user.reqUser])

    useEffect(()=>{
        if (userIds?.length > 0){
            const data = {
                jwt: token,
                userIds:[userIds].join(",")
            }
            dispatch(findPostUserAction(data))
            dispatch(findUsersByIdsAction(data))
            dispatch(getPopularUserAction(token))
        }
    },[userIds,post.createdPost, post.deletedPost])
    const storyUsers = hasStory(user.findUserByIds)


    return ( 
        <div>
            <div className="mt-10 flex w-[100%] justify-center">
                <div className="w-[44%] px-10">
                    <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full">
                        {storyUsers?.length > 0 && storyUsers?.map((item,index)=><StoryCircle key={index} user={item}/>)}
                    </div>
                    <div className="space-y-10 w-full mt-10">
                        {post?.usersPost.length>0 && post?.usersPost.map((post, index)=><PostCard key={index} post={post}/>)}
                    </div>
                </div>
                <div className="w-[27%]">
                    <HomeRight user={user.reqUser} popular={user.popular}/>
                </div>
            </div>
        </div>
     );
}
 
export default HomePage;