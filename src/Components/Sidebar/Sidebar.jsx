import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SidebarConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatePostModal from "../Post/CreatePostModal";
import { useDisclosure } from "@chakra-ui/react";
import SearchComponents from "../SearchComponents/SearchComponents";
import { useSelector } from "react-redux";

const Sidebar = () => {

    const [activeTab, setActiveTab] = useState("");
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const {user} = useSelector(store=>store)

    const handleTabClick = (title) =>{
        setActiveTab(title);
        if (title === "Trang cá nhân"){
            navigate(`/${user.reqUser?.username}`);
        }
        else if (title === "Trang chủ"){
            navigate("/");
        }
        else if (title === "Tạo"){
            onOpen();
        }

        if (title === "Tìm kiếm"){
            setIsSearchVisible(true);
        } else setIsSearchVisible(false);
    }

    return ( 
        <div className="sticky top-0 h-[100vh] flex">
            <div className={`flex flex-col justify-between h-full ${activeTab === "Tìm kiếm"?"px-2":"px-10"}`}>
                <div>
                    {activeTab !== "Tìm kiếm" &&
                    <div className="pt-10">
                        <img className="w-40" src="https://i.imgur.com/zqpwkLQ.png" alt="" />
                    </div>}
                    <div className="mt-10">
                        {menu.map((item,index)=> 
                            <div key={index} onClick={()=>handleTabClick(item.title)} className="flex items-center mb-5 cursor-pointer text-lg">
                                {activeTab===item.title?item.iactiveIcon:item.icon}
                                {activeTab !== "Tìm kiếm" && <p className={`${activeTab===item.title?"font-bold":"font-semibold"}`}>{item.title}</p>}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex items-center cursor-pointer pb-10">
                    <IoReorderThreeOutline  className="text-2xl"/>
                    {activeTab !== "Tìm kiếm" && <p className="ml-5">Xem Thêm</p>}
                </div>
            </div>
            <CreatePostModal isOpen={isOpen} onClose={onClose}/>
            {isSearchVisible && <SearchComponents/>}
            
        </div>
     );
}
 
export default Sidebar;