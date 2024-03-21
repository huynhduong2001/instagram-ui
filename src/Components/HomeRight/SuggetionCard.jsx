const SuggetionCard = ({user}) => {
    return ( 
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <img 
                    className="h-9 w-9 rounded-full object-cover" 
                    src={user?.image || "https://th.bing.com/th/id/OIP.c5KXw-wPcnwyyBNayoXfFQAAAA?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"} 
                    alt="" 
                />
                <div className="ml-2">
                    <p className="font-semibold text-sm">{user?.username}</p>
                    {/* <p className="text-xs  opacity-70">Có {user} người theo dõi</p> */}
                </div>
            </div>
            <p className="font-semibold text-xs text-blue-700">Theo dõi</p>
        </div>
     );
}
 
export default SuggetionCard;