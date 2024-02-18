import StoryViewer from "../../Components/StoryComponents/StoryViewer";

const Story = () => {

    const stories = [
        {image: "https://cdn.pixabay.com/photo/2023/12/20/07/04/sunset-8459057_640.jpg"},
        {image: "https://cdn.pixabay.com/photo/2023/12/14/23/34/butterfly-8449825_640.png"},
        {image: "https://cdn.pixabay.com/photo/2023/12/16/10/51/oak-leaf-8452141_640.jpg"},
        {image: "https://cdn.pixabay.com/photo/2023/12/01/21/16/rope-8424503_640.jpg"},
        {image: "https://cdn.pixabay.com/photo/2023/11/30/01/38/vietnam-8420600_640.jpg"},

    ];

    return ( 
        <div>
            <StoryViewer stories={stories}/>
        </div>
     );
}
 
export default Story;