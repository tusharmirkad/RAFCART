import { CiHeart } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { BsBagFill } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";

export default function Left(){
    return(
        <div className="w-80 border -ml-52 h-[600px] flex flex-col ">
            <div className="flex items-center border mb-5 border-gray-50 shadow-sm pb-2">
                <div className="h-18 w-18 border rounded-full ml-5  ">
                    <img className="p-1 h-16 w-16 rounded-full"  src="data:image/jpeg;base64,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"></img>
                </div>
                <div>
                    <a href="#" class="block max-w-sm p-2 w-full text-center ">
                    <p class="mb-1 text-xl tracking-tight text-gray-900 dark:text-white">Hello,</p>
                    <p class="ml-2 font-bold text-xl text-gray-700 dark:text-gray-400">John Die</p>
                    </a>
                </div>
            </div>
            <div className=" shadow-sm h-28 border border-gray-50 pr-28  pt-3 pl-10 mb-5 pb-4">
                <p class=" text-sm text-gray-700 dark:text-gray-400 pl-10">Manage Account</p>
                <p class=" text-sm text-gray-700 dark:text-gray-400 pl-10">Profile Inforamation</p>
                <p class=" text-sm text-gray-700 dark:text-gray-400 pl-10">Manage Address</p>
                <p class=" text-sm text-gray-700 dark:text-gray-400 pl-10">Change Password</p>
            </div>
            <div className=" shadow-sm h-28 border border-gray-50  pt-3 pl-10 mb-5 pb-4">
                <div className="flex">
                    <BsBagFill className="text-xl text-start"/>
                    <p class=" text-sm text-gray-700 dark:text-gray-400 pl-5">My Order History</p>
                </div>
                
                <p class=" text-sm text-gray-700 dark:text-gray-400 pl-10">My Return </p>
                <p class=" text-sm text-gray-700 dark:text-gray-400 pl-10">My Cancelations</p>
                <p class=" text-sm text-gray-700 dark:text-gray-400 pl-10">My Reviews</p>
            </div>
            <div className="  shadow-sm h-28 border border-gray-50 pr-28  pt-3 pl-10 mb-5 pb-4">
                    
                    <div className="flex">
                        <MdOutlinePayments className="text-xl " />
                        <p class=" text-sm text-gray-700 dark:text-gray-400 pl-5">Payments Methods</p>
                    </div>
                    <div><p class=" text-sm text-gray-700 dark:text-gray-400 pl-10">Voucher </p></div>
            </div>
            <div className=" flex shadow-sm h-28 border border-gray-50 pr-28  pt-3 pl-10 mb-5 pb-4">
                <CiHeart className="text-2xl mr-2 text-red-700" />
                <p class=" text-sm text-red-700 dark:text-gray-400 ">My Wishlist</p>
            </div>
            <div className="flex shadow-sm h-28 border border-gray-50  pb-4">
                <IoLogOutOutline className="text-xl ml-10"/>
                <p class="ml-3 text-sm text-gray-700 dark:text-gray-400">Logout</p>
            </div>
        </div>  
    )
}