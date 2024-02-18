import "./SearchComponents.css"
import SearchUserCard from "./SearchUserCard";

const SearchComponents = () => {
    return ( 
        <div className="searchContainer">
            <div className="px-3 pb-5">
                <h1 className="text-xl pb-5">Tìm kiếm</h1>
                <input type="text" placeholder="Tìm kiếm" className="searchInput" />
            </div>
            <hr />

            <div className="px-3 pt-5">
                {[1,1,1,1].map((item)=><SearchUserCard/>)}
            </div>
        </div>
     );
}
 
export default SearchComponents;