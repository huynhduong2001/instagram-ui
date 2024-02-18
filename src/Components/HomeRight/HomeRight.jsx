import SuggetionCard from "./SuggetionCard";

const HomeRight = () => {
    return ( 
        <div className="">
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div>
                            <img className="w-12 h-12 rounded-full" src="https://cdn.pixabay.com/photo/2023/11/29/12/29/kid-8419485_640.jpg" alt="" />
                        </div>
                        <div className="ml-3">
                            <p>fullname</p>
                            <p className="opacity-70">username</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-blue-700 text-xs font-semibold">Chuyển</p>
                    </div>

                </div>

                <div className="space-y-5 mt-10">
                    {[1,1,1,1].map(()=><SuggetionCard/>)}
                </div>
            </div>
            
        </div>
     );
}
 
export default HomeRight;