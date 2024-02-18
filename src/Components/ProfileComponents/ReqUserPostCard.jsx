import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "./ReqUserPostCard.css"


const ReqUserPostCard = () => {
    return ( 
        <div className="p-2">
            <div className="post w-60 h-60">
                <img className="cursor-pointer" src="https://scontent.fdad3-5.fna.fbcdn.net/v/t1.18169-9/19990094_288210774980354_8928360286378787219_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3a23d8&_nc_eui2=AeEA70_edftMny44A8BQTtiqKShTJLknALApKFMkuScAsJw60hwXSBCzKK8sw8B1805cspUoBo1peUND0VxbEmmW&_nc_ohc=r9Xt6b4PeokAX9JE1-M&_nc_ht=scontent.fdad3-5.fna&oh=00_AfA0pMAK-5Tu_3kZT7FjZHSWdiaGroyzF5VphE8szsLocg&oe=65BF5259" alt="" />
                <div className="overlay">
                    <div className="overlay-text flex justify-between">
                        <div className="flex items-center">
                            <AiFillHeart/>
                            <span className="ml-2">10</span>
                        </div>
                        <div className="flex items-center">
                            <FaComment/>
                            <span className="ml-2">10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ReqUserPostCard;