import { Header } from "./header";
import { Footer } from "./Footer";
import { Home } from "../../pages/Home";
// import { Outlet } from "react-router-dom";

const AppLayout = () =>{
    return (
        <>  
            <Header/>
            {/* <Outlet/> */}
            <Home/>
            <Footer/>
        </>
    )
}
export default AppLayout