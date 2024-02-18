import { useNavigate } from "react-router-dom";

const StoryCircle = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/story/")
    }

    return ( 
        <div onClick={handleNavigate} className="cursor-pointer flex flex-col items-center">
            <img className="w-16 h-16 rounded-full object-cover" src="https://cdn.pixabay.com/photo/2023/07/21/08/23/flower-8141085_640.jpg" alt="" />
            <p>username</p>
        </div>
     );
}
 
export default StoryCircle;