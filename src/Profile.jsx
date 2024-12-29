import { IoMdHome } from "react-icons/io";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Profile(){
    return(
        <div className="flex pl-36 mt-2 items-center">
            <IoMdHome /><MdOutlineKeyboardArrowRight className="mx-1" /><a href="#">Profile</a>
        </div>
    )
}