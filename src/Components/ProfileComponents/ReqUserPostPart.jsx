import { AiOutlineTable } from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import { PiUserSquareLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import ReqUserPostCard from "./ReqUserPostCard";
import { useDispatch, useSelector } from "react-redux";
import { reqUserPostAction } from './../../Redux/Post/Action';

const ReqUserPostPart = ({user}) => {
    const [activeTab, setActiveTab] = useState("Bài viết");
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()
    const {post} = useSelector(store=>store)
    const tabs = [
        {
            tab: "Bài viết",
            icon: <AiOutlineTable/>,

        },
        {
            tab: "Reels",
            icon: <RiVideoLine/>,

        },
        {
            tab: "Đã lưu",
            icon: <BiBookmark/>,

        },
        {
            tab: "Được gắn thẻ",
            icon: <PiUserSquareLight/>,
        },
    ]

    useEffect(()=>{
        if (user){
            const data = {
                jwt: token, userId: user?.id
            }
            dispatch(reqUserPostAction(data))
        }
        
    },[user, post.createdPost])

    return ( 
        <div>
            <div className="flex space-x-14 border-t relative">
                {tabs.map((item)=>
                    <div onClick={()=> setActiveTab(item.tab)} className={`${activeTab === item.tab?"border-t border-black":"opacity-60"} flex items-center cursor-pointer py-2 text-sm`}>
                        <p className="ml-1">{item.icon}</p>
                        <p>{item.tab}</p>
                    </div>
                )}
            </div>
            <div>
                <div className="flex flex-wrap">
                    { activeTab==="Bài viết"?post.reqUserPost?.map((item, index)=><ReqUserPostCard key={index} post={item}/>) : 
                    post.savePost?.map((item, index)=><ReqUserPostCard key={index} post={item}/>)}
                </div>
            </div>
        </div>
     );
}
 
export default ReqUserPostPart;