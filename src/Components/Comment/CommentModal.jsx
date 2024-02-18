import {  Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa6";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentCard from "./CommentCard";
import "./CommentModal.css"

const CommentModal = ({onClose, isOpen, isPostLiked, isSaved, handlePostLike, handleSaved}) => {

    return ( 
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent >
                    <ModalBody>
                        <div className="flex h-[75vh] ">
                            <div className="w-[45%] flex flex-col justify-center">
                                <img className="max-h-full w-full" src="https://cdn.pixabay.com/photo/2023/11/21/21/36/mountains-8404275_640.jpg" alt="" />
                            </div>
                            <div className="pl-10 w-[55%] relative">
                                <div className="flex justify-between items-center py-5">
                                    <div className="flex items-center">
                                        <div>
                                            <img className="h-9 w-9 rounded-full" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/159288603_1138117993322957_6770327921972223324_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeFquh81vKoW5_LqSUsKJ_z3Xl5pnZ1arGJeXmmdnVqsYn6xK-UmGu8QEb0xp8UwJ_QoP4QWcLPCFspyEgWCjHKU&_nc_ohc=rpJZ49sgTSsAX8n1LnW&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBEgrQew3uW4nhaqFCuudy8-PkzN5ENz081T_lSdXN2JQ&oe=65C199B4" alt="" />
                                        </div>
                                        <div className="ml-2">
                                            <p>Huỳnh Dương</p>
                                        </div>
                                    </div>
                                    <BsThreeDots/>
                                </div>
                                <hr />
                                <div className="comment">
                                    {[1,1,1,1].map(()=> <CommentCard/>)}
                                </div>
                                <div className=" absolute bottom-0 w-[90%]">
                                    <div className="flex items-center justify-between w-full px-5 py-4">
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
                                        <p>10 người đã thích</p>
                                        <p className="opacity-50 text-sm">1 ngày trước</p>
                                    </div>

                                    <div className=" border-t w-full">
                                        <div className="flex items-center w-full px-5 justify-between">
                                            <BsEmojiSmile/>
                                            <input className="commentInput" type="text" placeholder="Thêm bình luận..." />
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