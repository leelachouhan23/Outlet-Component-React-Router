import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { About } from "./pages/About";
import {Movies} from "./pages/Movies";
import {Contact} from "./pages/Contact";
import {Home} from "./pages/Home";
import AppLayout from "./components/layout/AppLeyout";
import "./App.css";
const App = ()=> {
  const router = createBrowserRouter([
      {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
        path:"/",
        element:<Home/>
      },
       {
        path:"contact/",
        element:<Contact/>
      },
       {
        path:"movies/",
        element:<Movies/>
      },
       {
        path:"about/",
        element:<About/>
      },
        ]
      },
       
  ])
  return <RouterProvider router={router}/>
}
export default App