import { AiOutlineTable } from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import { PiUserSquareLight } from "react-icons/pi";
import { useState } from "react";
import ReqUserPostCard from "./ReqUserPostCard";

const ReqUserPostPart = () => {
    const [activeTab, setActiveTab] = useState();
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
                    {[1,1,1,1,1].map(()=> <ReqUserPostCard/>)}
                </div>
            </div>
        </div>
     );
}
 
export default ReqUserPostPart;