import { CiSearch } from "react-icons/ci";
import { IoIosHelpBuoy } from "react-icons/io";
import { IoReorderThreeSharp } from "react-icons/io5";
import { MdOutlineCardTravel } from "react-icons/md";
import {
  NavBar,
  ProfileImage,
  Listitem,
  Itemtext,
  
} from './styledComponent'

const Header = () => (
  
        <NavBar>
             <Listitem>
             <IoReorderThreeSharp />
             <CiSearch />
                <input type="text" placeholder="Search" />
            </Listitem>

            <Listitem>
            <IoIosHelpBuoy />
                <Itemtext>help</Itemtext>
            
            <MdOutlineCardTravel />
                <Itemtext>Tour</Itemtext>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            </Listitem>   
        </NavBar>
     
)

export default Header
