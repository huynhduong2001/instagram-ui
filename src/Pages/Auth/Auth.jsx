import { useLocation } from "react-router-dom";
import Signin from "../../Components/Rester/Signin";
import "./Auth.css"
import Signup from "../../Components/Rester/Signup";

const Auth = () => {

    const location = useLocation();
    
    return ( 
        <div>
            <div className="flex items-center justify-center h-[100vh]">
                <div className="relative hidden lg:block">
                    <div className="h-[38.5rem] w-[27rem]">
                        <img className="h-full w-full" src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png" alt="" />
                        <div className=" mobileWallpaper h-[34rem] w-[15.7rem] absolute top-4 right-11">

                        </div>
                    </div>
                </div>
                <div className="w-[40vw] lg:w-[23vw]">
                    {location.pathname==="/login"? <Signin/> : <Signup/>}
                </div>
            </div>
        </div>
     );
}
 
export default Auth;
