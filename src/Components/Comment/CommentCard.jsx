import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { isCommentLikedByUser, timeDiffierence } from "../../Config/Logics";
import { useDispatch, useSelector } from "react-redux";
import { likeCommentAction, unlikeCommentAction } from "../../Redux/Comment/Action";

const CommentCard = ({comment}) => {
    const [isCommentLike, setIsCommentLike] = useState(false);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const {user} = useSelector(store=>store)
    const data = {
        commentId: comment.id,
        jwt: token
    }

    const handleLikeComment = ()=>{
        setIsCommentLike(true)
        dispatch(likeCommentAction(data))
    }
    const handleUnLikeComment = ()=>{
        setIsCommentLike(false)
        dispatch(unlikeCommentAction(data))
    }
    useEffect(()=>{
        setIsCommentLike(isCommentLikedByUser(comment,user.reqUser?.id))
    },[user.reqUser])
    return (
        <div>
            <div className="flex items-center justify-between py-5">
                <div className="flex items-center">
                    <div>
                        <img 
                            className="w-9 h-9 rounded-full" 
                            src={comment.user?.userImage || "https://th.bing.com/th/id/OIP.c5KXw-wPcnwyyBNayoXfFQAAAA?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"} 
                            alt="" 
                        />
                    </div>
                    <div className="ml-3">
                        <p>
                            <span className="font-semibold">{comment.user?.username}</span>
                            <span className="ml-2">{comment?.content}</span>

                        </p>
                        <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
                            <span>{timeDiffierence(comment?.createdAt)}</span>
                            {comment?.likedByUsers?.length > 0 && <span>{comment?.likedByUsers?.length} lượt thích</span>}
                        </div>
                    </div>

                </div>
                <div>
                    {isCommentLike?
                        <FaHeart className="text-xs hover:opacity-50 cursor-pointer text-red-500" onClick={handleUnLikeComment}/>:
                        <FaRegHeart className="text-xs hover:opacity-50 cursor-pointer" onClick={handleLikeComment}/>}
                </div>
            </div>
        </div>
     );
}
 
export default CommentCard;