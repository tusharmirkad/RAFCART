import Name from "./Name";
import SearchBox from "./SearchBox";
import Icons from "./Icons" ;

export default function Base(){
    return(
        <>
            <div className="flex justify-around p-4 sticky top-0 bg-gray-100">
                <Name />
                <SearchBox />
                <Icons />
            </div>
        </>
    )
}