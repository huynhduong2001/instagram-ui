import { useNavigate } from "react-router-dom";

const SearchUserCard = ({user}) => {

    const navigate = useNavigate()

    return ( 
        <div onClick={()=>{navigate(`/${user?.username}`)}} className="py-2 cursor-pointer">
            <div className="flex items-center">
                <img 
                    className="h-9 w-9 rounded-full object-cover" 
                    src={user?.image || "https://th.bing.com/th/id/OIP.c5KXw-wPcnwyyBNayoXfFQAAAA?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"} 
                    alt="" 
                />
                <div className="ml-3">
                    <p>{user?.name}</p>
                    <p className="opacity-70">{user?.username}</p>
                </div>
            </div>
        </div>
     );
}
 
export default SearchUserCard;