const SuggetionCard = () => {
    return ( 
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <img className="h-9 w-9 rounded-full" src="https://cdn.pixabay.com/photo/2023/11/30/07/04/shetland-sheepdog-8420917_640.jpg" alt="" />
                <div className="ml-2">
                    <p className="font-semibold text-sm">username</p>
                    <p className="text-xs  opacity-70">Có username và 3 người nữa theo dõi</p>
                </div>
            </div>
            <p className="font-semibold text-xs text-blue-700">Theo dõi</p>
        </div>
     );
}
 
export default SuggetionCard;