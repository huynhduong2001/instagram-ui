import SuggetionCard from "./SuggetionCard";

const HomeRight = ({user,popular}) => {
    return ( 
        <div className="">
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div>
                            <img 
                                className="h-12 w-12 rounded-full object-cover" 
                                src={user?.image || "https://th.bing.com/th/id/OIP.c5KXw-wPcnwyyBNayoXfFQAAAA?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"} 
                                alt="" 
                            />
                        </div>
                        <div className="ml-3">
                            <p>{user?.name}</p>
                            <p className="opacity-70">{user?.username}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-blue-700 text-xs font-semibold">Chuyển</p>
                    </div>

                </div>

                <div className="space-y-5 mt-10">
                    {popular?.length > 0 && popular.map((item, index)=><SuggetionCard user={item} key={index}/>)}
                </div>
            </div>
            
        </div>
     );
}
 
export default HomeRight;