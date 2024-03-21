import { useDispatch, useSelector } from "react-redux";
import "./SearchComponents.css"
import SearchUserCard from "./SearchUserCard";
import { useEffect } from "react";
import { searchUserAction } from "../../Redux/User/Action";

const SearchComponents = () => {

    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const {user} = useSelector(store=>store)

    const handleSearch = (e)=>{
        dispatch(searchUserAction({jwt:token,query:e.target.value}))
    }
    return ( 
        <div className="searchContainer">
            <div className="px-3 pb-5">
                <h1 className="text-xl pb-5">Tìm kiếm</h1>
                <input onChange={handleSearch} type="text" placeholder="Tìm kiếm" className="searchInput" />
            </div>
            <hr />

            <div className="px-3 pt-5">
                {user.searchUser?.length > 0 && user.searchUser?.map((item, index)=><SearchUserCard key={index} user={item}/>)}
            </div>
        </div>
     );
}
 
export default SearchComponents;