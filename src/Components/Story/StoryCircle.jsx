import { useNavigate } from "react-router-dom";

const StoryCircle = ({user}) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/story/${user?.id}`)
    }

    return ( 
        <div onClick={handleNavigate} className="cursor-pointer flex flex-col items-center">
            <img 
                className="w-16 h-16 rounded-full object-cover" 
                src={user?.image || "https://th.bing.com/th/id/OIP.c5KXw-wPcnwyyBNayoXfFQAAAA?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"} 
                alt="" 
            />
            <p>{user?.username}</p>
        </div>
     );
}
 
export default StoryCircle;