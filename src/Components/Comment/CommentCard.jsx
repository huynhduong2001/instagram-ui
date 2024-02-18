import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const CommentCard = () => {
    const [isCommentLike, setIsCommentLike] = useState(false);
    const hanndleCommentLike = ()=>{
        setIsCommentLike(!isCommentLike)
    }
    return (
        <div>
            <div className="flex items-center justify-between py-5">
                <div className="flex items-center">
                    <div>
                        <img className="w-9 h-9 rounded-full" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/159288603_1138117993322957_6770327921972223324_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeFquh81vKoW5_LqSUsKJ_z3Xl5pnZ1arGJeXmmdnVqsYn6xK-UmGu8QEb0xp8UwJ_QoP4QWcLPCFspyEgWCjHKU&_nc_ohc=rpJZ49sgTSsAX8n1LnW&_nc_ht=scontent.fdad3-4.fna&oh=00_AfBEgrQew3uW4nhaqFCuudy8-PkzN5ENz081T_lSdXN2JQ&oe=65C199B4" alt="" />
                    </div>
                    <div className="ml-3">
                        <p>
                            <span className="font-semibold">Huynh Duong</span>
                            <span className="ml-2">qua dep trai</span>

                        </p>
                        <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
                            <span>1 phút trước</span>
                            <span>100 lượt thích</span>
                        </div>
                    </div>

                </div>
                <div>
                    {isCommentLike?
                        <FaHeart className="text-xs hover:opacity-50 cursor-pointer text-red-500" onClick={hanndleCommentLike}/>:
                        <FaRegHeart className="text-xs hover:opacity-50 cursor-pointer" onClick={hanndleCommentLike}/>}
                </div>
            </div>
        </div>
     );
}
 
export default CommentCard;