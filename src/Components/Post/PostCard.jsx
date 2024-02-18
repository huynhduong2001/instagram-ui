import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import "./PostCard.css"
import { useState } from "react";
import { FaHeart, FaRegComment } from "react-icons/fa6";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import CommentModal from "../Comment/CommentModal";
import { useDisclosure } from "@chakra-ui/react";
const PostCard = () => {
    const [showDropDown, setShowDropDown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    }
    const handleClick = () => {
        setShowDropDown(!showDropDown)
    }
    const handleSaved = () => {
        setIsSaved(!isSaved)
    }
    const handleOpenComment = () => {
        onOpen();
    }


    return ( 
        <div>
            <div className="border rounded-md w-full">
                <div className="flex items-center justify-between w-full py-4 px-5">
                    <div className="flex items-center">
                        <div>
                            <img className="h-12 w-12 rounded-full" src="https://cdn.pixabay.com/photo/2024/01/03/17/50/sunset-8485910_640.jpg" alt="" />
                        </div>
                        <div className="pl-2">
                            <p className="font-semibold text-sm ">Username</p>
                            <p className="font-thin text-sm">location</p>
                        </div>

                    </div>
                    <div className="dropdown">
                        <BsThreeDots className="dots" onClick={()=>handleClick}/>
                        <div  className="dropdown-content">
                            {showDropDown && <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">Xoá</p>}
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <img src="https://cdn.pixabay.com/photo/2023/12/01/05/32/butterfly-8422900_640.jpg" alt="" />
                </div>
                <div className="flex items-center justify-between w-full px-5 py-4">
                    <div className="flex items-center space-x-2">
                        {isPostLiked?<FaHeart className="text-2xl hover:opacity-50 cursor-pointer text-red-500" onClick={handlePostLike}/>:<FaRegHeart className="text-2xl hover:opacity-50 cursor-pointer" onClick={handlePostLike}/>}
                        <FaRegComment onClick={handleOpenComment} className="text-2xl hover:opacity-50 cursor-pointer"/>
                        <RiSendPlaneLine className="text-2xl hover:opacity-50 cursor-pointer"/>
                        
                    </div>
                    <div>
                        {isSaved?<BsBookmarkFill onClick={handleSaved} className="text-2xl hover:opacity-50 cursor-pointer"/>:<BsBookmark onClick={handleSaved} className="text-2xl hover:opacity-50 cursor-pointer"/>}
                    </div>
                </div>

                <div className="px-5 py-2 w-full">
                    <p>10 người đã thích</p>
                    <p onClick={handleOpenComment} className="opacity-50 py-2 cursor-pointer">Xem tất cả 10 bình luận</p>
                </div>

                <div className="border border-t w-full">
                    <div className="flex items-center w-full px-5 justify-between">
                        <input className="commentInput" type="text" placeholder="Thêm bình luận..." />
                        <BsEmojiSmile/>
                    </div>
                </div>
            </div>

            <CommentModal onClose={onClose} isOpen={isOpen} isSaved={isSaved} isPostLiked={isPostLiked} handlePostLike={handlePostLike} handleSaved={handleSaved}/>
        </div>
     );
}
 
export default PostCard;