import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "./ReqUserPostCard.css"


const ReqUserPostCard = ({post}) => {
    return ( 
        <div className="p-2">
            <div className="post w-60 h-60">
                <img className="cursor-pointer object-cover" src={post?.image} alt="" />
                <div className="overlay">
                    <div className="overlay-text flex justify-between">
                        <div className="flex items-center">
                            <AiFillHeart/>
                            <span className="ml-2">{post?.likedByUsers?.length || 0}</span>
                        </div>
                        <div className="flex items-center">
                            <FaComment/>
                            <span className="ml-2">{post?.comments?.length || 0}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ReqUserPostCard;