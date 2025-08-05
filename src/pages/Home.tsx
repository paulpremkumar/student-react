import { Outlet } from "react-router-dom"; 
 const Home=()=>{
return (<>
<p>Home page</p>
<div><Outlet/></div>
</>)
}
export default Home;