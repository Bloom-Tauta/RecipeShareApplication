
import { NavLink } from "react-router-dom";
// import Search from "./Search";


function NavBar(){
    return(
        <div >
            {/* className="bg-gray-700 p-4 items-center justify-between flex " */}
            <span >Recipe Share</span>
            {/* className="text-white text-4xl" */}
            {/* <Search/> */}
            <div>
                <ul >
                {/* className=" flex gap-4 text-blue-300 text-base " */}
                    <NavLink to="/"  >Home</NavLink>
                    {/* className="hover:text-blue-800 font-bold" */}
                    <NavLink to="/sign-up"  >Sign Up</NavLink>
                    <NavLink to="/login"   >Login</NavLink>
                    <NavLink to="/favorite-recipes"   >Favorite Recipes</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;