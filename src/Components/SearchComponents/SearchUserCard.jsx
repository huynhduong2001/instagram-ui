const SearchUserCard = () => {
    return ( 
        <div className="py-2 cursor-pointer">
            <div className="flex items-center">
                <img className="h-9 w-9 rounded-full" src="https://cdn.pixabay.com/photo/2023/12/15/21/47/cat-8451431_640.jpg" alt="" />
                <div className="ml-3">
                    <p>Full name</p>
                    <p className="opacity-70">username</p>
                </div>
            </div>
        </div>
     );
}
 
export default SearchUserCard;