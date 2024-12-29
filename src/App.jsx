import Base from "./Header/Base" ;
import Nav from "./Nav";
import Profile from "./Profile";
import Main from "./MidPoint/Main";
import Foot from "./Footer/foot";


export default function App(){
  return(
    <>
      <Base /> 
      <Nav />
      <Profile />
      <Main />
      <Foot />
    </>
  )
}