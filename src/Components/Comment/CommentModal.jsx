import {  Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa6";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentCard from "./CommentCard";
import "./CommentModal.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction, findPostCommentAction } from './../../Redux/Comment/Action';
import { useParams } from "react-router-dom";
import { findPostByIdAction } from "../../Redux/Post/Action";
import { timeDiffierence } from "../../Config/Logics";

const CommentModal = ({onClose, isOpen, isPostLiked, isSaved, handlePostLike, handleSaved}) => {

    const [commentContent, setCommentContent] = useState("");
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    const {postId} = useParams();
    const {comment, post, user} = useSelector(store=>store)

    useEffect(()=>{
        if (postId){
            const data = {
                jwt: token,
                postId
            }
            dispatch(findPostByIdAction(data))
        }
        
    },[comment.createdComment, postId])
    

    return ( 
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent >
                    <ModalBody>
                        <div className="flex h-[75vh] ">
                            <div className="w-[45%] flex flex-col justify-center">
                                <img className="max-h-full w-full object-cover" src={post.singlePost?.image} alt="" />
                            </div>
                            <div className="pl-10 w-[55%] relative">
                                <div className="flex justify-between items-center py-5">
                                    <div className="flex items-center">
                                        <div>
                                            <img 
                                                className="h-9 w-9 rounded-full" 
                                                src={user.reqUser?.userImage || "https://th.bing.com/th/id/OIP.c5KXw-wPcnwyyBNayoXfFQAAAA?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"} 
                                                alt="" 
                                            />
                                        </div>
                                        <div className="ml-2">
                                            <p>{user.reqUser?.username}</p>
                                        </div>
                                    </div>
                                    <BsThreeDots/>
                                </div>
                                <hr />
                                <div className="comment">
                                    <div className="flex items-center justify-between py-5">
                                        <div className="flex items-center">
                                            <div>
                                                <img 
                                                    className="w-9 h-9 rounded-full" 
                                                    src={post.singlePost?.user?.userImage || "https://th.bing.com/th/id/OIP.c5KXw-wPcnwyyBNayoXfFQAAAA?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"} 
                                                    alt="" 
                                                />
                                            </div>
                                            <div className="ml-3">
                                                <p>
                                                    <span className="font-semibold">{post.singlePost?.user?.username}</span>
                                                    <span className="ml-2">{post.singlePost?.caption}</span>

                                                </p>
                                                <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
                                                    {post.singlePost?.createAt && <span>{timeDiffierence(post.singlePost?.createAt)}</span>}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* Reply to comment */}
                                    {post.singlePost?.comments?.length > 0 && post.singlePost?.comments?.map((item, index)=> <CommentCard key={index} comment={item}/>)}
                                </div>
                                <div className=" absolute bottom-0 w-[90%]">
                                    <div className="flex items-center justify-between w-full py-4">
                                        <div className="flex items-center space-x-2">
                                            {isPostLiked?<FaHeart className="text-2xl hover:opacity-50 cursor-pointer text-red-500" onClick={handlePostLike}/>:<FaRegHeart className="text-2xl hover:opacity-50 cursor-pointer" onClick={handlePostLike}/>}
                                            <FaRegComment className="text-2xl hover:opacity-50 cursor-pointer"/>
                                            <RiSendPlaneLine className="text-2xl hover:opacity-50 cursor-pointer"/>
                                            
                                        </div>
                                        <div>
                                            {isSaved?<BsBookmarkFill onClick={handleSaved} className="text-2xl hover:opacity-50 cursor-pointer"/>:<BsBookmark onClick={handleSaved} className="text-2xl hover:opacity-50 cursor-pointer"/>}
                                        </div>
                                    </div>

                                    <div className="w-full py-2">
                                        {post.singlePost?.likedByUsers?.length>0 && <p>{post.singlePost?.likedByUsers?.length} lượt thích</p>}
                                        {post.singlePost?.createAt &&  <p className="opacity-50 text-sm">{timeDiffierence(post.singlePost?.createAt)}</p>}
                                    </div>

                                    <div className=" border-t w-full">
                                        <div className="flex items-center w-full px-5 justify-between">
                                            <BsEmojiSmile/>
                                            <input 
                                                onChange={(e)=>setCommentContent(e.target.value)} 
                                                className="commentInput" 
                                                type="text" 
                                                placeholder="Thêm bình luận..." 
                                                value={commentContent}
                                                onKeyDown={(e)=>{
                                                    if(e.key==="Enter"){
                                                        const data = {
                                                            jwt: token,
                                                            postId,
                                                            data:{
                                                                "content": commentContent
                                                            }
                                                        }
                                                        dispatch(createCommentAction(data))
                                                        setCommentContent("")
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    
                </ModalContent>
            </Modal>
        </div>
     );
}
 
export default CommentModal;