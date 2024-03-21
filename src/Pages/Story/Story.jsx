import { useEffect } from "react";
import StoryViewer from "../../Components/StoryComponents/StoryViewer";
import { useDispatch, useSelector } from "react-redux";
import { findStoryById } from "../../Redux/Story/Action";
import { useParams } from "react-router-dom";

const Story = () => {
    const dispatch = useDispatch();
    const {userId} = useParams()
    const jwt = localStorage.getItem("token")
    const {story} = useSelector(store=>store)
    // const stories = [
    //     {image: "https://cdn.pixabay.com/photo/2023/12/20/07/04/sunset-8459057_640.jpg"},
    //     {image: "https://cdn.pixabay.com/photo/2023/12/14/23/34/butterfly-8449825_640.png"},
    //     {image: "https://cdn.pixabay.com/photo/2023/12/16/10/51/oak-leaf-8452141_640.jpg"},
    //     {image: "https://cdn.pixabay.com/photo/2023/12/01/21/16/rope-8424503_640.jpg"},
    //     {image: "https://cdn.pixabay.com/photo/2023/11/30/01/38/vietnam-8420600_640.jpg"},

    // ];

    useEffect(()=>{
        const data ={
            jwt, userId
        }
        dispatch(findStoryById(data))
    },[userId])

    return ( 
        <div>
            {story.stories?.length > 0 && <StoryViewer stories={story.stories}/>}
        </div>
     );
}
 
export default Story;