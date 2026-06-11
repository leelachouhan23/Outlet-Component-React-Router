import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import {About} from "./pages/About";
import {Movies} from "./pages/Movies";
import {Contact} from "./pages/Contact";
import {Home} from "./pages/Home"
import AppLayout from "./components/layout/AppLeyout";


const App = () =>{
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>
    },
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"about/",
      element:<About/>
    }
    ,{
      path:"contact/",
      element:<Contact/>
    },
    {
      path:"movies/",
      element:<Movies/>
    }
  ])

  return <RouterProvider router={router}/>
}
export default App;