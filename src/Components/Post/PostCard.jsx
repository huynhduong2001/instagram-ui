import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import "./PostCard.css"
import { useEffect, useState } from "react";
import { FaHeart, FaRegComment } from "react-icons/fa6";
import { RiSendPlaneLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import CommentModal from "../Comment/CommentModal";
import { useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { likePostAction, savePostAction, unlikePostAction, unsavePostAction } from "../../Redux/Post/Action";
import { isPostLikedByUser, timeDiffierence } from "../../Config/Logics";
import { useNavigate } from "react-router-dom";
const PostCard = ({post}) => {

    const [showDropDown, setShowDropDown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {user} = useSelector((store)=>store)

    const dispatch = useDispatch()
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const data = {
        jwt: token,
        postId: post?.id
    }

    const handlePostLike = () => {
        setIsPostLiked(true);
        dispatch(likePostAction(data))
    }
    const handlePostUnLike = () => {
        setIsPostLiked(false);
        dispatch(unlikePostAction(data))
    }
    const handleClick = () => {
        setShowDropDown(!showDropDown)
    }
    const handleSaved = () => {
        setIsSaved(true)
        dispatch(savePostAction(data))
    }
    const handleUnSaved = () => {
        setIsSaved(false)
        dispatch(unsavePostAction(data))
    }
    const handleOpenComment = () => {
        navigate(`/comment/${post.id}`)
        onOpen();
    }

    useEffect(()=>{
        setIsPostLiked(isPostLikedByUser(post, user.reqUser?.id))
        setIsSaved(user.reqUser, post.id)
    },[post.likedByUsers, user.reqUser])
    return ( 
        <div>
            <div className="border rounded-md w-full">
                <div className="flex items-center justify-between w-full py-4 px-5">
                    <div className="flex items-center">
                        <div>
                            <img 
                                className="h-12 w-12 rounded-full object-cover" 
                                src={post?.user?.userImage || "https://th.bing.com/th/id/OIP.c5KXw-wPcnwyyBNayoXfFQAAAA?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"} 
                                alt="" 
                            />
                        </div>
                        <div className="pl-2">
                            <p className="flex font-semibold text-sm ">
                                {post?.user?.username}

                                {post?.createAt && 
                                <span className="flex items-center ml-2 text-gray-600 opacity-50">
                                    <GoDotFill className="text-xs "/>
                                    {timeDiffierence(post?.createAt)}
                                </span>}
                            </p>
                            <p className="font-thin text-sm">{post?.location}</p>
                        </div>

                    </div>
                    <div className="dropdown">
                        <BsThreeDots className="dots" onClick={()=>handleClick}/>
                        <div  className="dropdown-content">
                            {showDropDown && <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">Xoá</p>}
                        </div>
                    </div>
                </div>

                <div className="w-full px-5">
                    <img src={post?.image} alt="" />
                </div>
                <div className="flex items-center justify-between w-full px-5 py-4">
                    <div className="flex items-center space-x-2">
                        {isPostLiked?
                            <FaHeart className="text-2xl hover:opacity-50 cursor-pointer text-red-500" onClick={handlePostUnLike}/>:
                            <FaRegHeart className="text-2xl hover:opacity-50 cursor-pointer" onClick={handlePostLike}/>}
                        <FaRegComment onClick={handleOpenComment} className="text-2xl hover:opacity-50 cursor-pointer"/>
                        <RiSendPlaneLine className="text-2xl hover:opacity-50 cursor-pointer"/>
                        
                    </div>
                    <div>
                        {isSaved?
                            <BsBookmarkFill onClick={handleUnSaved} className="text-2xl hover:opacity-50 cursor-pointer"/>:
                            <BsBookmark onClick={handleSaved} className="text-2xl hover:opacity-50 cursor-pointer"/>}
                    </div>
                </div>
                <div className="px-5 py-2 w-full">
                    <p>
                        <span className="font-semibold">{post?.user?.username}</span>
                        <span className="ml-2">{post?.caption}</span>
                    </p>
                </div>
                <div className="px-5 py-2 w-full">
                    {post?.likedByUsers?.length>0 && <p>{post?.likedByUsers?.length} người thích</p>}
                    {post?.comments?.length>0 && <p onClick={handleOpenComment} className="opacity-50 py-2 cursor-pointer">Xem tất cả {post?.comments?.length} bình luận</p>}
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